import { Component, OnInit } from '@angular/core';
import {NewsBase} from '../model/news-base';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsCards: NewsBase[] = new Array();

  constructor() { }

  ngOnInit() {
    this.newsCards.push(new NewsBase(
        "logo",
        "title 1",
        new Date(),
        "news",
        "image",
        "body 1 lorem ipsum stuff there is in here whatever lets just get this done",
        "http://www.google.com"));

    this.newsCards.push(new NewsBase(
        "logo",
        "title 2",
        new Date(),
        "news",
        "image",
        "body 2 lorem ipsum stuff there is in here whatever lets just get this done",
        "http://www.google.com"));

    this.newsCards.push(new NewsBase(
        "logo",
        "title 3",
        new Date(),
        "news",
        "image",
        "body 2 lorem ipsum stuff there is in here whatever lets just get this done",
        "http://www.google.com"));

    this.newsCards.push(new NewsBase(
        "logo",
        "title 4",
        new Date(),
        "news",
        "image",
        "body 3 lorem ipsum stuff there is in here whatever lets just get this done",
        "http://www.google.com"));
  }

}
