---
layout: post
title: Mastering Midjourney - The Hidden Secrets of D&D Maps
blogtitle: Mastering Midjourney - The Hidden Secrets of D&D Maps
gist: Learn how to create Dungeons & Dragons battle maps using the Midjourney text-to-image AI
author: Christoph
category: midjourney
date: 2023-08-07
featured: true
image: "/assets/images/posts/midjourneydnd.jpg"
toc: true
isreview: false
rating: 5
comments: true
comments_id: 4
last_modified_at: 2023-08-07
---

# Dungeons and Dragons

Dungeons and Dragons (D&D) is a popular tabletop role-playing game (RPG) that allows players to collaboratively create and navigate fantastical adventures in a fictional world. The game itself was created in the mid 1970's and, according to it's creator [1](https://www.nytimes.com/2022/05/21/style/dungeons-and-dragons.html), attracted over 50 million people worldwide. Players assume the roles of characters with unique abilities and personalities, guided by a storyteller known as the Dungeon Master (DM). The game blends storytelling, strategy, and chance as players embark on quests, engage in battles, solve puzzles, and interact with a richly detailed universe.

In this article, I'd like to show you how to use generative AI services such as Midjourney to create maps for your D&D campaigns.

## What makes a good DnD map?

Depending on whether you want to use the generated map for a dungeon, city or open world explorationm there are different criteria and map features you want to consider when crafting the prompt for your generative AI service of choice. For example, if you want to use the map for a dungeon there are a handful of features you may want to consider:

- Non-linear layout. Even if characters may be able to see the final room they should not be able to enter it right away.
- Multiple entrances. Especially dungeon maps can have multiple layers to it. Think about rooms / areas that connect to the map.
- Secrets and unusual paths.
- Incorporate natural formations such as mountains, waterfalls and worked stone structures.

# Midjourney

**[Midjourney](https://www.midjourney.com/)** is a generative AI service that offers text-to-image generation. The service itself is accessible through the platform Discord and Midjourney has it's own official Discord server. Users can generate images based on a prompt (via /imagine), or blend (via /blend) of images.

## Prompt engineering

Prompt for the text-to-image generation can be as simple as single words or emojis, but according to the Midjourney documentation the image generation works best with short and simple sentences.

For our use case of creating D&D maps there are a couple of factors we want to consider when crafting our first prompt.

1. Point of View - D&D maps are typically top down or feature an orthographic top down style (mostly used for world and region maps).
2. Map Type - Define whether you want to create a map for a whole World, Region, City, Dungeon or single building?
3. Key Features - How many entrances and structures do you want on your map?
4. Setting - Think of the region your campaign will take place in. Forests, Mountains, Deserts etc.. will give you a unique map that fits right into the desired region your campaign.

## Parameters

I found the following parameters the most useful when enchancing my prompts

- **--aspect** or **--ar** can be used to modify the aspect ratio of the generation. This parameters is very valuable when looking for maps with a fixed aspect ratio.

- **--no** Negative prompting allows you to remove certain figures eg plants or structures prior to generating a map.

- **/describe** The describe command can be used to generate a Midjourney prompt for an image. I use this command to reverse engineer and discover new prompt based on maps I already like.

The full can be found in the [Midjourney Parameter List](https://docs.midjourney.com/docs/parameter-list).

## Finalizing your map

Once you have crafted your first prompt you'll be able to review four generated images and are offered options on how to proceed and complete your project through Discord.

{% figure %}
![Midjourney dungeons & dragons discord options](/assets/images/posts/dnddiscord.png){:class="mx-auto"}
{% endfigure %}

Using the options below you can create new variants of the image or upscale the image.

| Button   | Function                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| V1 to V4 | Image Variation - Use this button to generate new variants based on the style and composition of the selected image.     |
| U1 to U4 | Image Selection and Upscaling - Use this button to generate a high resolution version of the selected image in the grid. |
| 🔄       | Use this button to re-run the job / reroll the image genation from the original prompt.                                  |

# Sample Prompts

## Prompt 1 - Snow fortress

{% figure caption:"**Prompt** 'dungeons and dragons map. dungeon. top down view. snow region'" class:"text-center" %}
![Midjourney dungeons & dragons map snow](/assets/images/posts/dndsnow.png){:class="mx-auto"}
{% endfigure %}

## Prompt 2 - Desert chapel

{% figure caption:"**Prompt**: 'a tabletop rpg map in orthographic top down style dungeons and dragons map. lost chapel in desert'" class:"text-center" %}
![Midjourney dungeons & dragons map desert](/assets/images/posts/dnddesert.png){:class="mx-auto"}
{% endfigure %}

## Prompt 3 - Forest village

{% figure caption:"**Prompt**: 'tabletop rpg map. orthographic top down style. dungeons and dragons map. small finishing village in a forest. aqueduct and waterfall next to village'" class:"text-center" %}
![Midjourney dungeons & dragons map forest](/assets/images/posts/dndforest.png){:class="mx-auto"}
{% endfigure %}

## Closing Words

Have you tried generating Dungeons & Dragons or Pathfinder maps using Midjourney? As an avid D&D player I am always looking forward to find new ways to enhance the gaming experience. Let me know in the comments below which prompts yielded the best results for you!
