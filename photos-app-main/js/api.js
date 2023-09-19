export async function getPhotos() {
    try {
      const response = await fetch('http://localhost:3002/photos');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const photos = await response.json();
      return photos;
    } catch (error) {
      console.error('Error fetching photos:', error);
      throw error;
    }
  }