# #hashtag-it!



Hashtag-it is a web service that utilizes Google's Machine Learning [Cloud Vision API](https://cloud.google.com/vision) to generate hashtags for an image. 

![ezgif-2-6840b31254](https://user-images.githubusercontent.com/97630089/192583401-dc111060-4d4e-4408-8580-aea28e2afeea.gif)

## How it works

When users upload an image to the site, it is sent to [Cloudinary](https://cloudinary.com/products/programmable_media) which hosts and generates a unique link for the image. That link is then passed on to the Vision API which returns tags based on what it thinks the image contains. These tags are converted to hashtags which the user can copy and paste into their next Instagram post.

![Alt text](public/wireframe/Screen_Shot_2022-08-18_at_2.32.39_PM.png "wireframe")

## Why did I make it?

I think Machine Learning is a fascinating subject in Computer Science and I wanted to create a tool that let me explore the applications of a Machine Learning algorithm. Additionally, I wanted to create a tool that could be used by anyone to generate hashtags for their images. 

## Tools used

- [Cloudinary](https://cloudinary.com/products/programmable_media)
- [Cloud Vision API](https://cloud.google.com/vision)
- [React](https://reactjs.org)

--
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
