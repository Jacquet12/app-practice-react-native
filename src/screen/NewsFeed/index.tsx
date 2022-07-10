import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { styles } from './styles';

// Função que pega as noticias do xml do website no Framework7
// async getNews() {
//   var self = this;
//   var app = self.app;
//   return await app.request.promise.get("https://practice.uffs.edu.br/feed.xml").then((res) => {
//       let xmlParser = require("fast-xml-parser");
//       let feed = xmlParser.parse(res.data);
//       let news = feed.rss.channel.item;
//       for (let i = 0; i < news.length; i++) {
//           const content = app.storage.processHTML(news[i].content);
//           news[i].content = content;
//           const pubDate = app.storage.formatDate(news[i].pubDate);
//           news[i].pubDate = pubDate;
//       }
//       return news;
//   });
// };


export function NewsFeed({ navigation}: any) {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}