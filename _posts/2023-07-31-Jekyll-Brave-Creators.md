---
layout: post
title: Jekyll - Enabling Brave Creators
author: Christoph
categories: ["jekyll"]
date: 2023-07-31
featured: false
image: "/assets/images/posts/brave.png"
toc: true
isreview: false
rating: 5
comments: true
comments_id: 3
last_modified_at: 2023-07-31
---

# Brave Creators Overview

[Brave Creators](https://creators.brave.com/) allows content creators to earn for channels such as websites, publications, YouTube or Twitch. Allowing viewers to support the creator despite using ad blocking such as the [Brave Browser](https://brave.com/). The program is widely adopted and used by established media outlets such as Vice, The Guardian and The Washington Post.

Creators are rewarded with crypto currency BAT (Basic Attention Token) which is granted to Brave Browser users by viewing viewing privacy-respecting ads. Users have the choice to tip their favorite content creators either manually or automatically after they've been awarded their monthly earnings.

Getting started is as simple as [signing up for a Brave Creator Account](https://creators.brave.com/sign-up). Once signed up you have the option to enable Brave Rewards for multiple channels. In our case of a Jekyll based blog we chose Website.

# Brave Website verification

Once you have entered your domain, you will be prompted to verify ownership of the domain. Therefore you have two options, either downloading a trusted file or editing the DNS records of your site. Brave recommend enabling HTTPS and downloading a trusted file and add it to your .well-known directory. For Jekyll blogs this is as easy as adding a file to the top level of your project containing your verification Token. The Token can be found in the brave-rewards-verification.txt file that Brave will prompt you to download during the verification process.

# Sample Configuration

```yaml
---
layout: null
permalink: .well-known/brave-rewards-verification.txt
---

This is a Brave Rewards publisher verification file.

Domain: {your domain}.com
Token: {your brave creators verification token}
```

An example (and this blog's configuration) can be found in the brave-rewards-verification.txt file in the [repository of christoph-rieger.ca](https://github.com/chphr/christoph-rieger/blob/main/brave-rewards-verification.txt)

**Please note that I do leverage Brave Creators on this website.**
