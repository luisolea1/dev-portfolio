import assert from 'node:assert/strict'
import { test } from 'node:test'
import { formatMexicoCityTime } from '../src/features/clock/formatMexicoCityTime.ts'

test('muestra hora, segundos y desfase de CDMX aunque el equipo use otra zona', () => {
  assert.deepEqual(formatMexicoCityTime(new Date('2026-09-15T05:36:45Z')), {
    time: '11:36:45 PM',
    offset: 'GMT-6',
  })
})

test('cambia de día y de PM a AM al llegar a medianoche', () => {
  assert.equal(formatMexicoCityTime(new Date('2026-09-15T05:59:59Z')).time, '11:59:59 PM')
  assert.equal(formatMexicoCityTime(new Date('2026-09-15T06:00:00Z')).time, '12:00:00 AM')
})

test('muestra las doce del mediodía con PM', () => {
  assert.equal(formatMexicoCityTime(new Date('2026-09-15T18:00:00Z')).time, '12:00:00 PM')
})

test('obtiene el desfase de la zona IANA y respeta sus reglas históricas', () => {
  assert.deepEqual(formatMexicoCityTime(new Date('2021-07-15T18:00:00Z')), {
    time: '01:00:00 PM',
    offset: 'GMT-5',
  })
})

test('conserva dos dígitos en horas, minutos y segundos', () => {
  assert.equal(formatMexicoCityTime(new Date('2026-09-15T07:02:03Z')).time, '01:02:03 AM')
})
