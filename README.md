# #hashtag-it!



Hashtag-it is a web service that utilizes Google Cloud's [Vision AI](https://cloud.google.com/vision) to generate hashtags for an image. 

![ezgif-2-6840b31254](https://user-images.githubusercontent.com/97630089/192583401-dc111060-4d4e-4408-8580-aea28e2afeea.gif)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

```
Node & NPM
```

1. Clone this repo.
2. Create a `.env` file in the root of the repo.
3. Add the following lines to your `.env` file, replacing the values with your own.

```
REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
REACT_APP_VISION_API_KEY=your-vision-api-key
```

4. Run `npm install` to install dependencies.
5. Run `npm start` to start the server.
6. The app should open in your browser at [http://localhost:3000](http://localhost:3000)

## How it works

When a user uploads an image to the site, it is sent to [Cloudinary](https://cloudinary.com/products/programmable_media) which hosts and generates a unique link for the image. That link is then passed on to the [Vision AI](https://cloud.google.com/vision) which returns labels based on what is in the image.

Those labels are then formatted and returned to the user to be used as hashtags.

## Why did I make it?

I think Machine Learning is a fascinating subject in Computer Science. I wanted to make an app that utilized the power of Vision AI to give users an idea of how Machine Learning can be used in everyday life. In my research, I came across [@vinitshahdeo](https://github.com/vinitshahdeo/Hashtagify) amazing project [Hashtagify](https://github.com/vinitshahdeo/Hashtagify) and that gave me the idea to create my own version. I learned a ton of new things while making this app and I hope to continue learning more in the future.

## Built With

* [React](https://reactjs.org) - The JS framework used
* [Cloudinary](https://cloudinary.com/products/programmable_media) - Image hosting service
* [Vision AI](https://cloud.google.com/vision) - Google Cloud's Image Recognition Service

## Acknowledgments

* [@vinitshahdeo](https://github.com/vinitshahdeo/Hashtagify) - Creater of Hashtagify

--
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
