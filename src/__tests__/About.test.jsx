import { render, screen } from '@testing-library/react'
import About from '../pages/About'
import { vi } from 'vitest'

vi.mock('../services/schoolinfo', () => ({ getSchoolInfo: () => Promise.resolve({ data: { about: 'Test about', mission: 'Test mission', achievements: 'A;B' } }) }))

test('renders about content', async () => {
  render(<About />)
  expect(await screen.findByText(/About Sunshine School/i)).toBeDefined()
  expect(await screen.findByText(/Test about/)).toBeDefined()
})
