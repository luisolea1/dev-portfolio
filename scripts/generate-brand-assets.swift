// Regenerar en macOS desde la raíz: swift scripts/generate-brand-assets.swift
// Los PNG resultantes se versionan; la compilación web no necesita Swift.
import AppKit
import CoreText
import Foundation

let output = URL(fileURLWithPath: FileManager.default.currentDirectoryPath).appendingPathComponent("public")
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)

for path in [
    "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff",
    "node_modules/@fontsource/inter/files/inter-latin-500-normal.woff",
    "node_modules/@fontsource/space-mono/files/space-mono-latin-400-normal.woff",
] {
    CTFontManagerRegisterFontsForURL(URL(fileURLWithPath: path) as CFURL, .process, nil)
}

func color(_ hex: UInt32) -> NSColor {
    NSColor(srgbRed: CGFloat((hex >> 16) & 255) / 255,
            green: CGFloat((hex >> 8) & 255) / 255,
            blue: CGFloat(hex & 255) / 255, alpha: 1)
}
let background = color(0x131313)
let foreground = color(0xe5e2e1)
let secondary = color(0xa3a3a3)
let accent = color(0xff6a2b)

func render(_ filename: String, width: Int, height: Int, draw: (CGFloat) -> Void) throws {
    guard let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height,
                                        bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true,
                                        isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0),
          let context = NSGraphicsContext(bitmapImageRep: bitmap) else {
        fatalError("No se pudo crear el lienzo")
    }
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = context
    context.imageInterpolation = .high
    background.setFill()
    NSRect(x: 0, y: 0, width: width, height: height).fill()
    draw(CGFloat(height))
    NSGraphicsContext.restoreGraphicsState()
    guard let png = bitmap.representation(using: .png, properties: [:]) else {
        fatalError("No se pudo exportar el PNG")
    }
    try png.write(to: output.appendingPathComponent(filename))
    print("Generado \(filename): \(width) × \(height)")
}

func rectangle(_ x: CGFloat, _ top: CGFloat, _ width: CGFloat, _ height: CGFloat,
               fill: NSColor, canvasHeight: CGFloat, radius: CGFloat = 0) {
    fill.setFill()
    NSBezierPath(roundedRect: NSRect(x: x, y: canvasHeight - top - height, width: width, height: height),
                 xRadius: radius, yRadius: radius).fill()
}

func logo(x: CGFloat, top: CGFloat, size: CGFloat, canvasHeight: CGFloat) {
    let scale = size / 64
    rectangle(x, top, size, size, fill: background, canvasHeight: canvasHeight, radius: 14 * scale)
    rectangle(x + 17 * scale, top + 16 * scale, 8 * scale, 33 * scale, fill: foreground, canvasHeight: canvasHeight)
    rectangle(x + 17 * scale, top + 42 * scale, 22 * scale, 7 * scale, fill: foreground, canvasHeight: canvasHeight)
    accent.setFill()
    NSBezierPath(ovalIn: NSRect(x: x + 41 * scale, y: canvasHeight - top - 50 * scale,
                               width: 10 * scale, height: 10 * scale)).fill()
}

func text(_ value: String, x: CGFloat, top: CGFloat, size: CGFloat, fill: NSColor,
          canvasHeight: CGFloat, mono: Bool = false, medium: Bool = false) {
    let name = mono ? "SpaceMono-Regular" : (medium ? "Inter-Medium" : "Inter-Regular")
    let font = NSFont(name: name, size: size) ?? (mono
        ? NSFont.monospacedSystemFont(ofSize: size, weight: .regular)
        : NSFont.systemFont(ofSize: size, weight: medium ? .medium : .regular))
    let attributes: [NSAttributedString.Key: Any] = [.font: font, .foregroundColor: fill]
    let string = value as NSString
    string.draw(at: NSPoint(x: x, y: canvasHeight - top - string.size(withAttributes: attributes).height),
                withAttributes: attributes)
}

try render("favicon-32.png", width: 32, height: 32) { height in
    logo(x: 0, top: 0, size: 32, canvasHeight: height)
}
try render("apple-touch-icon.png", width: 180, height: 180) { height in
    logo(x: 0, top: 0, size: 180, canvasHeight: height)
}
try render("social-preview.png", width: 1200, height: 630) { height in
    rectangle(64, 62, 36, 4, fill: accent, canvasHeight: height)
    text("PORTAFOLIO / FRONTEND DEVELOPER", x: 64, top: 85, size: 16, fill: accent, canvasHeight: height, mono: true)
    text("Luis Olea", x: 60, top: 165, size: 92, fill: foreground, canvasHeight: height, medium: true)
    text("Interfaces web y", x: 64, top: 303, size: 34, fill: foreground, canvasHeight: height)
    text("experiencias digitales.", x: 64, top: 351, size: 34, fill: foreground, canvasHeight: height)
    rectangle(870, 174, 266, 266, fill: color(0x303030), canvasHeight: height, radius: 30)
    rectangle(871, 175, 264, 264, fill: color(0x181818), canvasHeight: height, radius: 29)
    logo(x: 891, top: 195, size: 224, canvasHeight: height)
    rectangle(64, 489, 1072, 1, fill: color(0x303030), canvasHeight: height)
    text("React · TypeScript · Vite", x: 64, top: 522, size: 21, fill: secondary, canvasHeight: height, mono: true)
    text("PROYECTOS / CV / CONTACTO", x: 818, top: 528, size: 14, fill: secondary, canvasHeight: height, mono: true)
}
