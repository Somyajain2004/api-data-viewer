# Dog Gallery

A simple React web application that displays 5 random dog images using the Dog CEO API. Users can refresh the images or search and display images of a specific breed using a dropdown menu.

## Features

* Displays 5 random dog images on initial load.
* "Refresh" button to fetch new random dog images.
* Dropdown to select a specific breed and fetch 5 images of that breed.
* Responsive and clean UI.

## API Used

**Dog CEO Dog API**: [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/)

Endpoints used:

* Random images: `https://dog.ceo/api/breeds/image/random/5`
* List of breeds: `https://dog.ceo/api/breeds/list/all`
* Breed-specific images: `https://dog.ceo/api/breed/{breed-name}/images/random/5`

## Setup Requirements

* Node.js (v14 or later)
* npm (v6 or later)
* Git

## Deployment

This app is deployed using Vercel.
You can view the live demo at:

```
https://api-data-viewer-theta.vercel.app/
```
