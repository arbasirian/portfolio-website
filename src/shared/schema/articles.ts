export interface Article {
    id: number;
    title: string;
    summary: string;
    text: string;
    image_url: string;
    author: string;
}
export interface ArticleState {
    currentArticle: Article;
    articleSlideItem: number;
    articles: Article[];
}