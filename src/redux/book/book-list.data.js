const BOOK_LIST = [
    {
        id: 1,
        title: 'High Performance Web Sites: Essential Knowledge For Front-End Engineers',
        image_url: '/static/1.jpg',
        description: `Want your web site to display more quickly? This book presents 14 specific rules that will cut 25% to 50% off response time when users request a page. Author Steve Souders, in his job as Chief Performance Yahoo! collected these best practices while optimizing some of the most-visited pages on the Web. Even sites that had already been highly optimized, such as Yahoo! Search and the Yahoo! Front Page, were able to benefit from these surprisingly simple performance guidelines. The rules in High Performance Web Sites explain how you can optimize the performance of the Ajax, Css, JavaScript, Flash, and images that you've already built into your site - adjustments that are critical for any rich web application. Other sources of information pay a lot of attention to tuning web servers, databases, and hardware, but the bulk of display time is taken up on the browser side and by the communication between server and browser. High Performance Web Sites covers every aspect of that process. Each performance rule is supported by specific examples, and code snippets are available on the book's companion web site. The rules include how to: Make Fewer Http Requests Use a Content Delivery Network Add an Expires Header Gzip Components Put Stylesheets at the Top Put Scripts at the Bottom Avoid Css Expressions Make JavaScript and Css External Reduce Dns Lookups Minify JavaScript Avoid Redirects Remove Duplicates Scripts Configure Etags Make Ajax Cacheable If you're building pages for high traffic destinations and want to optimize the experience of users visiting your site, this book is indispensable. "If everyone would implement just 20% of Steve's guidelines, the Web would be a dramatically better place. Between this book and Steve's Yslow extension, there's really no excuse for having a sluggish web site anymore" -Joe Hewitt, Developer of Firebug debugger and Mozilla's Dom Inspector "Steve Souders has done a fantastic job of disti`,
        amazoon_url: 'https://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309/ref=sr_1_5?crid=378KR9TNNJE9Q&dchild=1&keywords=front+end+development&qid=1593499048&sprefix=front+end+deve%2Cdigital-music%2C341&sr=8-5',
        price: '$10.99',
        release_date: '2007-09-18',
        author: 'Steve Souders'
    },
    {
        id: 2,
        title: 'Frontend Architecture for Design Systems: A Modern Blueprint for Scalable and Sustainable Websites',
        image_url: '/static/2.jpg',
        description: `Imagine what a large-scale web project would look like if frontend development were not treated as an add-on, but as an equal partner with backend development and content strategy. This practical book takes experienced web developers through the new discipline of frontend architecture, including the latest tools, standards, and best practices that have elevated frontend web development to an entirely new level. Using real-world examples, case studies, and practical tips and tricks throughout, author Micah Godbolt introduces you to the four pillars of frontend architecture. He also provides compelling arguments for developers who want to embrace the mantle of frontend architect and fight to make it a first-class citizen in their next project.`,
        amazoon_url: 'https://www.amazon.com/Frontend-Architecture-Design-Systems-Sustainable/dp/1491926783/ref=sr_1_14?crid=378KR9TNNJE9Q&dchild=1&keywords=front+end+development&qid=1593499048&sprefix=front+end+deve%2Cdigital-music%2C341&sr=8-14',
        price: '$22.39',
        release_date: '2007-09-18',
        author: 'Micah Godbolt'
    }
];

export default BOOK_LIST;