import React, { useEffect } from "react";


function TextBox({ imageUrl }) {
  const [text, setText] = React.useState("");

  function clickHandler(e) {
    navigator.clipboard.writeText(text);
    console.log("button clicked");
    e.preventDefault();
  }

  useEffect(() => {
    getResponse();
  }, [imageUrl]);

  async function getResponse() {
    //wait 1.5 seconds
    await new Promise((r) => setTimeout(r, 1500));
    const response = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_VISION_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requests: [
            {
              features: [
                {
                  maxResults: 50,
                  type: "LABEL_DETECTION",
                },
              ],
              image: {
                source: {
                  imageUri: imageUrl,
                },
              },
            },
          ],
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        var list = [];
        for (let i = 0; i < data.responses[0].labelAnnotations.length; i++) {
          // replace whitespace with hyphen and add # to beginning, do this for all words and setText to the result
          var hashtag = data.responses[0].labelAnnotations[i].description
            .replace(/\s+/g, "-")
            .toLowerCase();
          hashtag = "#" + hashtag;
          list.push(hashtag);
          setText(list.join(" "));
          // setText((text) => text + "#" + data.responses[0].labelAnnotations[i].description + " ");
        }
      });
  }

  return (
    <form>
      <textarea
        className="text-box"
        placeholder="Generating hashtags..."
        value={text.toLowerCase()}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="text-box-button-div">
        <button className="text-box-button" onClick={clickHandler}>
          Copy to clipboard!
        </button>
      </div>
    </form>
  );
}

export default TextBox;


/**
 * Thank you for taking the time to meet with me on Friday.
 * It
 */