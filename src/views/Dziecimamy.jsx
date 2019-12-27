import React from "react";
import Article from "../components/Article/Article";
import LazyImg from "../components/LazyImage/LazyImg";
import BadgesContainer from "../containers/BadgesContainer";
import Underline from "../components/Underline/Underline";
import Emoji from "../components/Emoji/Emoji";
import {
  NuxtIcon,
  GraphQLIcon,
  NodeIcon,
  SassIcon
} from "../components/icons/Technologies";
export default function Dziecimamy() {
  return (
    <Article>
      <LazyImg
        low="https://kajetaniak.pl/images/dziecimamy/main-low.png"
        high="https://kajetaniak.pl/images/dziecimamy/main.png"
        alt="dziecimamy"
      />
      <header>
        <h1>Dziecimamy</h1>
        <a
          href="https://www.dziecimamy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-focus"
        >
          <Underline>Live</Underline>
        </a>
        <a
          href="https://github.com/FilipKajetaniak/dziecimamy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-focus"
        >
          <Underline>Github</Underline>
        </a>
        <p>
          Single page application blog with custom CMS made from scratch. It
          loads and renders data on server so search engines can analyze the
          content.
        </p>
        <BadgesContainer>
          <span className="technology-badge nuxt">
            <NuxtIcon />
            Nuxt
          </span>
          <span className="technology-badge graphql">
            <GraphQLIcon />
            GraphQL
          </span>
          <span className="technology-badge sass">
            <SassIcon />
            Sass
          </span>
          <span className="technology-badge node">
            <NodeIcon />
            Node.js
          </span>
        </BadgesContainer>
      </header>
      <h2>Features</h2>
      <p>I believe this app is super cool and let my tell you why.</p>
      <ul className="feature-list">
        <li>
          <Emoji>📄</Emoji> It's a Single Page App
        </li>
        <li>
          <Emoji>🕷️</Emoji> It's SEO friendly
        </li>
        <li>
          <Emoji>📁</Emoji> It has a simple custom CMS
        </li>
        <li>
          <Emoji>🔒</Emoji> Admin panel is secured
        </li>
        <li>
          <Emoji>🎨</Emoji> It has custom illustrations
        </li>
        <li>
          <Emoji>📱</Emoji> It's responsive and cross browser compatible
        </li>
      </ul>
      <p>
        But most importantly, it's a legit app. It's not just a simple training
        project. It's deployed on a Node.js server, it has all the features a
        proper blog should have like SSL certificate, comments section,
        newsletter form, page sharing e.t.c.
      </p>
      <LazyImg
        low="https://kajetaniak.pl/images/dziecimamy/dziecimamy-ipad-low-2.png"
        high="https://kajetaniak.pl/images/dziecimamy/dziecimamy-ipad.png"
        alt="dziecimamy ipad mockup"
      />
      <h2>Technologies</h2>
      <p>
        Technologies used for this project are quite unusuall. You don't see
        blogs with this stack everyday. I used Vue.js for snappy and dynamic
        user interface. I also added Nuxt.js, which is an additional library /
        framework for server side rendering in Vue. Regarding back-end, I used
        GraphQL for fetching data from API and Graphcool as a database. GraphQL
        is essentially a better alternative to REST. It's a super new technology
        developed by Facebook team for more efficient API queries and mutations.
        Graphcool is a service that lets you set up a GraphQL database in a
        cloud server. To keep everything together and to be to able to render
        html on server I used Node.js. Were these technologies the best choice
        for this kind of project? Not really. Using a Wordpress or Jekyll
        certainly would be a much easier solution. Despite some painful
        drawbacks I'm glad I've finished this project with this setup. I had to
        face tons of different problems which made me learn incomparably more
        than if I used a CMS.
      </p>
      <LazyImg
        low="https://kajetaniak.pl/images/dziecimamy/admin-low.png"
        high="https://kajetaniak.pl/images/dziecimamy/admin.png"
        alt="admin panel"
      />
      <h2>Problems I faced when developing this app</h2>
      <p>
        I wasn't very experienced with Vue when I started building this project.
        At that point I had watched only one online course about Vue and
        finished one simple project. I wasn't aware of downsides of single page
        apps. I didn't know that if your content is being asynchronously loaded
        and then rendered with JavaScript, it's pretty much invisible for
        Google's web crawlers. So I was pretty depressed when I stumbled upon
        some JavaScript conference where they mentioned this problem with SPA's.
        After a whole day of crying in a fetal position I started reading about
        prerendering and SSR. That's how I discovered and eventually migrated
        the code to Nuxt. Implementing GraphQL was also a big hassle for me.
        Mostly because there wasn't much info about that on the internet. There
        were literally 0 articles about implementing GraphQL into Nuxt in
        Polish. There were just few in English but these articles covered only
        basics. I was considering switching to Firebase (which I was a bit more
        experienced with) but I decided not to. Firebase didn't provide the best
        solutions for advanced queries, authorization and data relationships. I
        eventually had to learn everything on my own by reading their enigmatic
        docs and other people github repos.
      </p>
      <LazyImg
        low="https://kajetaniak.pl/images/dziecimamy/3-low.png"
        high="https://kajetaniak.pl/images/dziecimamy/3.png"
        alt="dziecimamy sugestie postów"
      />
      <h2>What would I do differently today?</h2>
      <p>
        Allthough everything is working as intended and my code is DRY I would
        still do some things differently. I was learning JavaScript the entire
        time I was building this project. When I was starting I wasn't aware of
        linters and naming conventions. That's why in some places my code can be
        slightly different. I also regret adding this project to GitHub so late.
        When it comes to CSS, I would definitely organize the styles better. I
        thought separating CSS with just Vue components is a good enough
        solution. However there were still some cases where I repeated the same
        styles in different places. I drawn conclusions from these mistakes
        though. I approached code organization better with my next project.
      </p>
      <h2>What's next?</h2>
      <p>
        Even if the app is working perfectly fine as it is right now, I'm still
        working on implementing new features. In my spare time I'm trying to
        figure out how to migrate the existing back-end to a custom GraphQL
        server on Express with a MongoDB database. It's not required right now,
        but it would be safer in a long term.
      </p>
    </Article>
  );
}
