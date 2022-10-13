import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player"><iframe class="video__iframe"></iframe></div>
            <h3 class="video__title"></h3>
        </section>`);

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    console.log(url);

    iframe.src = "https://www.youtube.com/embed/73nm6RsmcRU";

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

// <iframe
//   width="1280"
//   height="720"
//   src="https://www.youtube.com/embed/73nm6RsmcRU"
//   title="나는 태어난지 28일 된 피그미 다람쥐 새끼다 [애니멀봐 나새끼 8호]ㅣI’m A 28 Days Old Baby Pygmy Squirrel"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;
