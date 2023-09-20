---
layout: post
title: Maximizing the Potential of Markdown - Embedding YouTube Videos Made Simple
blogtitle: Maximizing the Potential of Markdown - Embedding YouTube Videos Made Simple
gist: Are you using Markdown for blogging or documentation? This tutorial will show you how to embed YouTube videos.
author: Christoph
category: markdown
date: 2023-09-20
featured: true
image: /assets/images/posts/youtubemarkdown.png
toc: true
isreview: false
rating: 5
comments: true
comments_id: 7
last_modified_at: 2023-09-20
---

# Maximizing the Potential of Markdown - Embedding YouTube Videos Made Simple

Are you using Markdown for blogging or documentation? This tutorial will show you how to embed YouTube videos.

## Markdown

Markdown is a easy-to-read and easy-to-write markup language for creating formatted text. Initially relased in 2004 it grew quickly in popularity and is today widely used to write technical documentation and blog posts. It's especially useful for quickly creating content when using site generators such as [Astro](https://astro.build/), [Jekyll](https://astro.build/) or [Next.js](https://dev.to/ethand91/creating-a-markdown-blog-with-nextjs-1dci) in lieu of using a content management system (CMS).

One of the challenges I had to solve for this blog is embedding YouTube videos in blog posts and while Markdown does not offer the ability to embed videos directly there are two schools of thought here. Either you can including a linked image in your markup file (for example including the video thumbnail with a link to YouTube), or use an html iframe element to allow users to play the video while staying on your site.

The instructions below focus on the latter and will walk you through embedding the video using and iframe and leveraging the latest CSS to automatically adjust the element for different screen sizes and viewports.

### HTML element to embed YouTube video

Using the code below you can embed YouTube videos using an iframe element.

```html
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  frameborder="0"
  allow="fullscreen"
  title="Video Title"
></iframe>
```

You can see that we define a couple of attributes for the element. In the reference below you can find the usage of each attribute and it's value for the user.

| Attribute   | Function                                                                                                                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src         | The src attribute specifies the address of the document to embed in an iframe. In order to embed YouTube videos you'll need to set this parameter to https://www.youtube.com/embed/{YouTube Video ID}                                          |
| frameborder | The HTML Iframe frameborder Attribute is used to specify whether or not to display the border around the content of an <iframe> Element. Borders are not displayed by default but can be enabled by setting the attribute to 1.                |
| allow       | The allow attribute is used to specify permissions for the iframe. We set it to 'fullscreen' to allow a user to maximize the video into fullscreen mode. Alternatively, you can use allowfullscreen which is considered as a legacy attribute. |
| title       | The title attribute can be added to the <iframe> tag to describe the contents of the frame to people using assistive technology. It's best practise to include the attribute for accessibility.                                                |

For more information on YouTube embedding and the supported parameters check out the official [YouTube Embedded Players and Player Parameters](https://developers.google.com/youtube/player_parameters) documentation.

### CSS to scale and center YouTube video

While the code above allows you to embed a YouTube video there are a couple more adjustments you need to make in order to make the iframe responsive and scaling with screensize.

With the introduction of the [aspect-ratio property](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) in CSS it's very simple to scale media such as iframes, videos and images without the need of additional JavaScript code. In the following snippet we define an aspect-ratio of 16/9 and scale the width with the

```css
iframe {
  /* Assign aspect ratio and scale width with screen width */
  aspect-ratio: 16 / 9;
  height: auto;
  width: 100%;
  /* Optional - Center the iframe horizontally */
  margin-left: auto;
  margin-right: auto;
}
```

### Example

Using the HTML and CSS code above I embedded the following video below

<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="fullscreen" title='YouTube iframe example' ></iframe>

## Common Mistakes

### Youtube refused to connect

If you're experiencing a 'www.youtube.com refused to connect' error as shown below, you're using the wrong URL path when embedding the video. Your URL may look like 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' and links directly to the platform by using the 'watch' instead of 'embed' path.

{% figure %}
![Youtube refused to connect example](/assets/images/posts/ytrefuse.png){:class="mx-auto"}
{% endfigure %}

## Closing Words

Do you use Markdown for blogging or documentation? If so let me know about challenges you face in the comments!
