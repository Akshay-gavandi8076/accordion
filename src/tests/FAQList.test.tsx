import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { fetchFAQData } from '../api/api'
import FAQList from '../components/FAQ/FAQList'

// Mock the API function
jest.mock('../api/api', () => ({
  fetchFAQData: jest.fn(),
}))

// Sample FAQ data for testing
const sampleFAQData = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
]

describe('FAQList Component', () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    jest.clearAllMocks()
  })

  it('renders FAQs', async () => {
    // Mock the API response
    ;(fetchFAQData as jest.Mock).mockResolvedValue(sampleFAQData)

    render(<FAQList />)

    // Wait for the fetchFAQData to be called and resolve
    await waitFor(() => expect(fetchFAQData).toHaveBeenCalled())

    // Wait for FAQs to be rendered
    await waitFor(() => {
      expect(
        screen.getByText(
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
        )
      ).toBeInTheDocument()
    })

    // Separate assertion for the second FAQ
    await waitFor(() => {
      expect(screen.getByText('qui est esse')).toBeInTheDocument()
    })
  })
})
