'use strict'


let cards = [
    {id: 1, title: 'bottle', price: Math.floor(Math.random() * (600 - 145) + 18) + ' $', img: 'img/flacon.jpg'},
    {id: 2, title: 'lamp', price: Math.floor(Math.random() * (600 - 146) + 11) + ' $', img: 'img/lamp.jpg'},
    {id: 3, title: 'spoon', price: Math.floor(Math.random() * (600 - 146) + 34) + ' $', img: 'img/spoon.jpg'},
    {id: 4, title: 'table', price: Math.floor(Math.random() * (600 - 145) + 12) + ' $', img: 'img/table.jpg'},
    {id: 5, title: 'clock', price: Math.floor(Math.random() * (600 - 144) + 9) + ' $', img: 'img/clock1.jpg'},
    {id: 6, title: 'chandelier', price: Math.floor(Math.random() * (600 - 16) + 88) + ' $', img: 'img/chairs.jpg'},
    {id: 7, title: 'clock', price: Math.floor(Math.random() * (600 - 147) + 3) + ' $', img: 'img/clock2.jpg'},
    {id: 8, title: 'chair', price: Math.floor(Math.random() * (600 - 175) + 4) + ' $', img: 'img/stool.jpg'},
    {id: 9, title: 'cosmetics', price: Math.floor(Math.random() * (600 - 146) + 7) + ' $', img: 'img/corrine.jpg'},
    {id: 10, title: 'tumbler', price: Math.floor(Math.random() * (600 - 145) + 5) + ' $', img: 'img/tumblr.jpg'}
]
const menu = [
    {id: 1, title: 'ALL ABOUT US', text: `Building a brand doesn’t happen overnight. It takes a lot of work to forge strong relationships with people—and much of that work is done through marketing. Unless you have a powerhouse internal team to help you tell your story, it’s likely you’ll need a little support in crafting and executing your marketing strategy. But searching for the right partner to help you do that can be confusing. There are all sorts of agencies out there, so how do you know whether you should hire a creative agency, a digital agency, or an ad agency?`, name: 'ALL', img: '<img src="img/icons/line2.svg" class="things__nav-pic-string" alt="">'},
    {id: 2, title: 'LOGO HISTORY', text: 'A logo identifies key information about your business wildhearts company branding Logo design by Milica2505 for Wild Hearts. Along with demarcating your business, a good logo also provides your customer with some crucial information about your company: it can communicate the industry you exist in, the service you provide, your target demographic and your brand values. For example, a company might use circuit imagery into their logo to show that they operate in the software industry. Or they might use a specific color to communicate they are committed to being green/environmental. Or they might use a stylish font to highlight that they are luxurious. Check out how Wild Hearts uses an image of a book with a heart in it to show that their business specializes in romance novels', name: 'LOGO', img: '<img src="img/icons/line2.svg" class="things__nav-pic-string" alt="">'},
    {id: 3, title: 'MOBILE APP', text: 'What Is a Mobile App? App Development Basics for Businesses What is a mobile application? What kind of benefits does it bring to businesses? Read this guide to learn about the process of building a mobile app. Mobile is a growing industry that attracts businesses from every marketplace. No wonder – mobile app revenues are projected to reach almost $600 billion in 2020. The exploding popularity of smartphones and tablets has made mobile application development an increasingly popular trend among business owners all over the world.', name: 'MOBILE APP', img: '<img src="img/icons/line2.svg" class="things__nav-pic-string" alt="">'},
    {id: 4, title: 'WORDPRESS', text: 'What is WordPress? At its core, WordPress is the simplest, most popular way to create your own website or blog. In fact, WordPress powers over 39.5% of all the websites on the Internet. Yes – more than one in four websites that you visit are likely powered by WordPress.n On a slightly more technical level, WordPress is an open-source content management system licensed under GPLv2, which means that anyone can use or modify the WordPress software for free. A content management system is basically a tool that makes it easy to manage important aspects of your website – like content – without needing to know anything about programming. The end result is that WordPress makes building a website accessible to anyone – even people who aren’t developers.', name: 'WORDPRESS', img: '<img src="img/icons/line2.svg" class="things__nav-pic-string" alt="">'},
    {id: 5, title: 'WEB DESIGN', text: 'Although web design has a fairly recent history. It can be linked to other areas such as graphic design, user experience, and multimedia arts, but is more aptly seen from a technological standpoint. It has become a large part of peoples everyday lives. It is hard to imagine the Internet without animated graphics, different styles of typography, background, videos and music. In 1989, whilst working at CERN Tim Berners-Lee proposed to create a global hypertext project, which later became known as the World Wide Web. During 1991 to 1993 the World Wide Web was born. Text-only pages could be viewed using a simple line-mode browser.[2] In 1993 Marc Andreessen and Eric Bina, created the Mosaic browser. At the time there were multiple browsers, however the majority of them were Unix-based and naturally text heavy. There had been no integrated approach to graphic design elements such as images or sounds. The Mosaic browser broke this mould.[3] The W3C was created in October 1994 to "lead the World Wide Web to its full potential by developing common protocols that promote its evolution and ensure its interoperability."[4] This discouraged any one company from monopolizing a propriety browser and programming language, which could have altered the effect of the World Wide Web as a whole. The W3C continues to set standards, which can today be seen with JavaScript and other languages. In 1994 Andreessen formed Mosaic Communications Corp. that later became known as Netscape Communications, the Netscape 0.9 browser. Netscape created its own HTML tags without regard to the traditional standards process.', name: 'WEB DESIGN', img: '<img src="img/icons/line2.svg" class="things__nav-pic-string" alt="">'},
    {id: 6, title: 'UI/UX', text: '1993 - The Launch of Search Just 2 years after the launch of the World Wide Web, we got introduced to ALIWEB! ALIWEB (Archie Like Indexing for the WEB) is considered to be the first Web search engine. They opened for business in November 1993 providing users with helpful links to the webs best content. In just 2 years, you start to see how design is coming to life. The goal of ALIWEB was to help users find helpful information. They wanted users to be drawn into the sites links. Using a colored background, they drew your eye to the more important elements of the page.MTV Launched its website in 1993. VJ Adam Curry ran the site unofficially and personally at first. MTV was an early adopter of landing pages. This was the image you saw when you landed on their site in 1993. Big difference from just a few years before. Can you image how long this took to load? By the end of 1993, there were 623 websites, according to a study by MIT Researcher Matthew Gray. The internet was taking off and so was design.The online marketing world is much older than many think. While many sites become overcrowded with ads during the 90s. Hotwire, now known as Wired, did a nice job of adding the worlds first banner ad into their sites header in 1994. Notice how design is becoming much more complex. This page had very little text, but more design elements to engage the users. The Internet continued to boom.', name: 'UI/UX', img: '<img src="img/icons/line2.svg" class="things__nav-pic-string" alt="">'},
    {id: 7, title: 'OUR BRANDING', text: 'The Origins of Branding The word brand dates back to Old Norse, the ancient North Germanic language from which modern Scandinavian languages derived. Brand originally referred to a piece of burning wood. It wasn’t used as a verb until late Middle English, when it came to mean “mark permanently with a hot iron.” By the seventeenth century, it referred to a mark of ownership made by branding.The practice of branding livestock is much older than the word. Cave paintings from the Stone Age suggest that early man might have marked cattle with symbols drawn in paint and tar. By 2000 BC, livestock owners switched to a more permanent method: burning. Egyptian funeral monuments, approximately 4,000 years old, depict branded cattle.During this time, brands were also used to identify goods. Pottery makers from China, India, Greece, Rome, and Mesopotamia (now Iraq) used different engravings to identify not only who made ceramic goods but also what types of materials were used and where the goods were produced. Some of the earliest known marked Chinese pottery dates back 4,000 to 5,000 years. Archaeologists have also identified roughly 1,000 unique potters’ marks in use during the first three centuries of the Roman Empire.Potters weren’t the only artisans to brand their work. In Ancient Egypt, masons engraved symbols-called stonecutters’ signs-on the bricks they produced for the pyramids and other Pharaoh-led construction projects. This helped distinguish their work from that of other masons and ensured they were fairly paid. Bricks often included quarry marks, which indicated where the stones came from. The oldest materials with these symbols are around 6,000 years old. Similar markings were used by masons in Greece, Israel, Turkey, Syria, and later in Medieval Germany.', name: 'BRANDING', img: '<img src="img/icons/line2.svg" class="things__nav-pic-string" alt="">'}
]
const headerNav = [
    {id: 1, name: 'HOME', html: ` <!--intro start-->
    <div class="intro" id="scroll-item">
        <div class="intro__caption">
            <div class="intro__title">
                <h1 class="intro__title-main">Lian Creative Agency</h1>
            </div>
            <h2 class="intro__subtitle">Minimal Freelance Portfolio </h2>
        </div>
    </div>
    <!--intro end-->

    <!--things start-->
    <div class="things">
        <div class="wrapper">
            <img src="img/icons/line1.svg" class="things__nav-pic" alt=""> <!--поменять на бордер!-->
            <nav class="things__nav">
                <ul class="things__list">
                </ul>
            </nav>
            <img src="img/icons/line1.svg" class="things__nav-pic" alt="" id="things-empty"> <!--поменять на бордер!-->
            <div class="things__cards" id="cards">
        </div>
    </div>
    <!--things end-->
    </div>`},
    {id: 2, name: 'ABOUT', html: `<!--about end-->
<div class="about" id="scroll-item">
        <div class="wrapper">
            <div class="about__caption">
                <div class="about__title">
                    <h1 class="about__title-main">About the Agency</h1>
                </div>
                <h2 class="about__subtitle">Welcome to Lian</h2>
            </div>
        </div>
    </div>
    <!--about end-->
    <!--info start-->
    <div class="info">
        <div class="wrapper">
            <div class="info__item">
                <div class="info__photo">
                    <img src="img/about/photo1.jpg" alt="">
                </div>
                <div class="info__description">
                    <h2 class="info__title">Our Story</h2>
                    <p class="info__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
                    <p class="info__desc">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                    <h2 class="info__title">Our SKills</h2>

                    <div class="info__skills">
                        <!--LINE 1-->
                        <div class="info__items">
                            <div class="info__items-info">
                                <span class="info__items-title">
                                    Photoshop
                                </span>
                            </div>
                            <div class="info__items-back"><span class="info__items-percent">90%</span>
                            </div>
                        </div>
                        <div class="info__items-lines"></div>
                        <!--LINE 2-->
                        <div class="info__items">
                            <div class="info__items-info2">
                                <span class="info__items-title">
                                    Branding
                                </span>
                            </div>
                            <div class="info__items-back"><span class="info__items-percent">95%</span>
                            </div>
                        </div>
                        <div class="info__items-lines2"></div>
                        <!--LINE 3-->
                        <div class="info__items">
                            <div class="info__items-info3">
                                <span class="info__items-title">
                                    Photography
                                </span>
                            </div>
                            <div class="info__items-back"><span class="info__items-percent">50%</span>
                            </div>
                        </div>
                        <div class="info__items-lines3"></div>
                        <!--LINE 4-->
                        <div class="info__items">
                            <div class="info__items-info4">
                                <span class="info__items-title">
                                    Web Design
                                </span>
                            </div>
                            <div class="info__items-back"><span class="info__items-percent">85%</span>
                            </div>
                        </div>
                        <div class="info__items-lines4"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!--info end-->
    <!--awesome start-->
    <div class="awesome">
        <div class="wrapper">
            <div class="awesome__header">
                <h1 class="awesome__title">Awesome Team </h1>
                <p class="awesome__subtitle">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
                </p>
            </div>

            <div class="awesome__cards">
                <!--CARD 1-->
                <div class="awesome__card">
                    <img src="img/about/1.png" alt="">
                    <div class="awesome__card-info">
                        <h3 class="awesome__card-name">Lian Joy</h3>
                        <span class="awesome__card-proffesion">CEO/Founder</span>
                        <span class="awesome__card-desc">
                            Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci
                        </span>
                    </div>
                </div>
                <!--CARD 2-->
                <div class="awesome__card">
                    <img src="img/about/2.jpg" alt="">
                    <div class="awesome__card-info">
                        <h3 class="awesome__card-name">Albert Thanh</h3>
                        <span class="awesome__card-proffesion">CEO/Founder</span>
                        <span class="awesome__card-desc">
                            Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci
                        </span>
                    </div>
                </div>
                <!--CARD 3-->
                <div class="awesome__card">
                    <img src="img/about/3.jpg" alt="">
                    <div class="awesome__card-info">
                        <h3 class="awesome__card-name">Jenn Pereira</h3>
                        <span class="awesome__card-proffesion">CEO/Founder</span>
                        <span class="awesome__card-desc">
                            Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>`},
    {id: 3, name: 'PORTFOLIO', html: `<!--portfolio start-->
    <div class="portfolio" id="scroll-item">
        <div class="wrapper">
            <div class="portfolio__caption">
                <div class="portfolio__title">
                    <h1 class="portfolio__title-main">Latest Projects</h1>
                </div>
                <h2 class="portfolio__subtitle">We Deliver Quality</h2>
            </div>
        </div>
    </div>
    <!--portfolio end-->

    <!--things start-->
    <div class="things">
        <div class="wrapper">
            <img src="img/icons/line1.svg" class="things__nav-pic" alt="">
            <nav class="things__nav">
                <ul class="things__list">
                    <li class="thing__item">
                        <a href="#" class="things__link-nav">ALL</a><img src="img/icons/line2.svg"
                                                                         class="things__nav-pic-string" alt=""></li>
                    <li class="thing__item">
                        <a href="#" class="things__link-nav">LOGO</a><img src="img/icons/line2.svg"
                                                                          class="things__nav-pic-string" alt=""></li>
                    <li class="thing__item">
                        <a href="#" class="things__link-nav">MOBILE APP</a><img src="img/icons/line2.svg"
                                                                                class="things__nav-pic-string" alt="">
                    </li>
                    <li class="thing__item">
                        <a href="#" class="things__link-nav">WORDPRESS</a><img src="img/icons/line2.svg"
                                                                               class="things__nav-pic-string" alt="">
                    </li>
                    <li class="thing__item">
                        <a href="#" class="things__link-nav">WEB DESIGN</a><img src="img/icons/line2.svg"
                                                                                class="things__nav-pic-string" alt="">
                    </li>
                    <li class="thing__item">
                        <a href="#" class="things__link-nav">UI/UX</a><img src="img/icons/line2.svg"
                                                                           class="things__nav-pic-string" alt=""></li>
                    <li class="thing__item things__branding">
                        <a href="#" class="things__link-nav .things__branding">BRANDING</a></li>
                </ul>
            </nav>
            <img src="img/icons/line1.svg" class="things__nav-pic" alt="">

            <div class="things__cards">

            </div>

        </div>
    </div>`},
    {id: 4, name: 'BLOG', html: ` <!--blog start-->
    <div class="blog" id="scroll-item">
        <div class="wrapper">
            <div class="blog__caption">
                <div class="blog__title">
                    <h1 class="blog__title-main">News About Lian</h1>
                </div>
                <h2 class="blog__subtitle">Latest News & Insights</h2>
            </div>
        </div>
    </div>
    <!--blog end-->

    <!--things start-->
    <div class="news">
        <div class="wrapper">
            <div class="news__cards">

                <!--CARD 1-->
                <div class="news__card">
                    <div class="card__main">
                        <button class="card__main-button">
                            WORDPRESS
                        </button>
                        <h2 class="card__title">
                            Im am a Blog Post Title
                        </h2>
                        <span class="card__byuser">
                            <i class="fas fa-user"></i>&nbsp;&nbsp;by Jenn Pereira
                        </span>
                        <p class="card__desc">
                           Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris. Etiam facilisis eu nisi scelerisque faucibus...
                        </p>
                        <div class="card__date-item">
                            <span class="card__date">
                                <i class="far fa-calendar">&nbsp;&nbsp;on Luly 19,2020</i>
                            </span>
                            <span class="card__date-share">
                                <i class="fas fa-share-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fas fa-heart"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <!--CARD 2-->
                <div class="news__card">
                    <img src="img/blog/flacon.jpg" alt="">
                    <div class="card__main">
                        <h2 class="card__title">
                            Im am a Blog Post Title
                        </h2>
                        <span class="card__byuser">
                            <i class="fas fa-user"></i>&nbsp;&nbsp;by Jenn Pereira
                        </span>
                        <p class="card__desc">
                            Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris...
                        </p>
                        <div class="card__date-item">
                            <span class="card__date">
                                <i class="far fa-calendar">&nbsp;&nbsp;on Luly 19,2020</i>
                            </span>
                            <span class="card__date-share">
                                <i class="fas fa-share-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fas fa-heart"></i>
                            </span>
                        </div>
                    </div>

                </div>

                <!--CARD 3-->
                <div class="news__card card__coffee">
                    <div class="card__main">
                        <button class="card__main-button">
                            IMAGE HOVER
                        </button>
                        <h2 class="card__title card__coffee-title">
                            Im am a Blog Post Title
                        </h2>
                        <span class="card__byuser">
                            <i class="fas fa-user"></i>&nbsp;&nbsp;by Jenn Pereira
                        </span>
                        <p class="card__desc card__coffee-desc">
                            Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper...
                        </p>
                        <div class="card__date-item">
                            <span class="card__date">
                                <i class="far fa-calendar">&nbsp;&nbsp;on Luly 19,2020</i>
                            </span>
                            <span class="card__date-share">
                                <i class="fas fa-share-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fas fa-heart"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <!--CARD 4-->
                <div class="news__card">
                    <img src="img/blog/clock1.png" alt="">
                    <div class="card__main">
                        <h2 class="card__title">
                            Im am a Blog Post Title
                        </h2>
                        <span class="card__byuser">
                            <i class="fas fa-user"></i>&nbsp;&nbsp;by Jenn Pereira
                        </span>
                        <p class="card__desc">
                            Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris...
                        </p>
                        <div class="card__date-item">
                            <span class="card__date">
                                <i class="far fa-calendar">&nbsp;&nbsp;on Luly 19,2020</i>
                            </span>
                            <span class="card__date-share">
                                <i class="fas fa-share-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fas fa-heart"></i>
                            </span>
                        </div>
                    </div>

                </div>

                <!--CARD 5-->
                <div class="news__card">
                    <div class="card__video">
                        <div class="card__video-pic"><img src="img/blog/play.png" alt=""></div>
                    </div>
                </div>

                <!--CARD 6-->
                <div class="news__card">
                    <img src="img/blog/exchange.jpg" alt="">
                    <div class="card__main">
                        <h2 class="card__title">
                            Im am a Blog Post Title
                        </h2>
                        <span class="card__byuser">
                            <i class="fas fa-user"></i>&nbsp;&nbsp;by Jenn Pereira
                        </span>
                        <p class="card__desc">
                            Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris...
                        </p>
                        <div class="card__date-item">
                            <span class="card__date">
                                <i class="far fa-calendar">&nbsp;&nbsp;on Luly 19,2020</i>
                            </span>
                            <span class="card__date-share">
                                <i class="fas fa-share-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fas fa-heart"></i>
                            </span>
                        </div>
                    </div>

                </div>

                <!--CARD 7-->
                <div class="news__card">
                    <div class="card__search">
                        <form action="#">
                            <input type="search" name="user-like-to-do" class="card__search-input" placeholder="Search" style="width: 270px;" />
                        </form>
                        <button class="card__search-button">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>


                </div>

                <!--CARD 8-->
                <div class="news__card">
                    <div class="news__card-header">
                        <span class="news__card-title">
                            Recent Posts
                        </span>
                    </div>
                    <div class="news__card-posts">
                        <!--CARD1-->
                        <div class="news__posts-info">
                           <img src="img/blog/crem.jpg" alt="" class="new__posts-pic">
                            <div class="news__posts-item">
                                <div><span class="news__posts-title">Lorem ipsum dolor sit amet, consec</span></div>
                                <span class="new__posts-date">
                                    July 17, 2020
                                </span>
                            </div>
                        </div>
                        <!--CARD2-->
                        <div class="news__posts-info">
                            <img src="img/blog/single.jpg" alt="" class="new__posts-pic">
                            <div class="news__posts-item">
                                <div><span class="news__posts-title">Ut wisi enim ad minim veniam, quis</span></div>
                                <span class="new__posts-date">
                                    July 17, 2020
                                </span>
                            </div>
                        </div>
                        <!--CARD3-->
                        <div class="news__posts-info">
                            <img src="img/blog/spic.jpg" alt="" class="new__posts-pic">
                            <div class="news__posts-item">
                                <div><span class="news__posts-title">Aliquip ex ea commodo aliquam erat volutpat
                                </span></div>
                                <span class="new__posts-date">
                                    July 17, 2020
                                </span>
                            </div>
                        </div>
                        <!--CARD4-->
                        <div class="news__posts-info">
                            <img src="img/blog/tea.jpg" alt="" class="new__posts-pic">
                            <div class="news__posts-item">
                                <div><span class="news__posts-title">Ut wisi enim ad minim veniam, quis</span></div>
                                <span class="new__posts-date">
                                    July 17, 2020
                                </span>
                            </div>
                        </div>
                    </div>


                </div>

                <!--CARD 9-->
                <div class="news__card">
                    <div class="news__card-header">
                        <span class="news__card-title">
                            Recent Posts
                        </span>
                        </div>
                        <div class="new__cards-tags">
                            <button class="new__tags-button">
                                <span class="new__tags-button-text">construction</span>
                            </button>

                            <button class="new__tags-button">
                                <span class="new__tags-button-text">engineering</span>
                            </button>

                            <button class="new__tags-button">
                                <span class="new__tags-button-text">architecture</span>
                            </button>

                            <button class="new__tags-button">
                                <span class="new__tags-button-text">structural design</span>
                            </button>

                            <button class="new__tags-button">
                                <span class="new__tags-button-text">civil engineer</span>
                            </button>

                            <button class="new__tags-button">
                                <span class="new__tags-button-text">industrial</span>
                            </button>

                            <button class="new__tags-button">
                                <span class="new__tags-button-text">management</span>
                            </button>

                            <button class="new__tags-button">
                                <span class="new__tags-button-text">mechanical</span>
                            </button>
                        </div>

                </div>

                <!--CARD 10-->
                <div class="news__card">
                    <div class="news__card-header">
                        <span class="news__card-title">
                            Instagram
                        </span>
                    </div>

                    <div class="news__instagram">
                       <div class="news__instagram-pic"> <a href=""><img src="img/blog/1.jpg" alt="" class="news__instagram-pic"></a></div>
                        <div class="news__instagram-pic"><a href=""><img src="img/blog/2.jpg" alt="" class="news__instagram-pic"></a></div>
                        <div class="news__instagram-pic"><a href=""><img src="img/blog/3.png" alt=""class="news__instagram-pic"></a></div>
                        <div class="news__instagram-pic"><a href=""><img src="img/blog/4.jpg" alt=""class="news__instagram-pic"></a></div>
                        <div class="news__instagram-pic"><a href=""><img src="img/blog/5.jpg" alt=""class="news__instagram-pic"></a></div>
                        <div class="news__instagram-pic"><a href=""><img src="img/blog/6.jpg" alt=""class="news__instagram-pic"></a></div>
                        <div class="news__instagram-pic"><a href=""><img src="img/blog/7.png" alt=""class="news__instagram-pic"></a></div>
                        <div class="news__instagram-pic"><a href=""><img src="img/blog/8.jpg" alt=""class="news__instagram-pic"></a></div>
                        <div class="news__instagram-pic"><a href=""><img src="img/blog/9.jpg" alt=""class="news__instagram-pic"></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`},
    {id: 5, name: 'CONTACT', html: ` <!--about start-->
    <div class="about" id="scroll-item">
        <div class="wrapper">
            <div class="about__caption">
                <div class="about__title about__contact">
                    <h1 class="about__title-main">Get in Touch</h1>
                </div>
                <h2 class="about__subtitle">Contact us Today</h2>
            </div>
        </div>
    </div>
    <!--about end-->

    <!--office start-->
    <div class="office">
        <div class="wrapper">
            <div class="office__items">
                <div class="office__info">
                    <h1 class="office__info-title">Office Info</h1>
                    <p class="office__info-subtitle">People Behind the Success of our Company</p>
                    <hr align="left" class="office__info-line">
                    <p class="office__info-adress">Office Hours:  <span class="span">Mon-Friday 8am - 10pm</span></p>
                    <p class="office__info-adress">Address: <span class="span">Igbalangao, Bugasong, Antique</span></p>
                    <p class="office__info-number">Tell: &nbsp;<span>123-456-7890</span></p>
                    <p class="office__info-number">Fax: &nbsp;<span>123-456-7890</span></p>
                </div>
                <div class="office__input">
                    <div class="office__input-fields">
                        <input type="text" name="user-like-to-do" class="office__input-field" placeholder="Name">
                        <input type="text" name="user-like-to-do" class="office__input-field" placeholder="Email">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <button class="office__input-button">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!--office end-->


    <!--map start-->
    <div class="map">
        <div class="map__window">
            <div class="map__window-text">
                <p class="map__window-title">Mulitix Big Wordpress Theme</p>
                <p>110-00 Rockaway Blvd</p>
                <p>South Ozone Park, NY 11420</p>
            </div>
        </div>
    </div>
    <!--map end-->

    <!--awesome start-->
    <div class="awesome">
        <div class="wrapper">
            <div class="awesome__header">
                <h1 class="awesome__title">Our Values</h1>
                <p class="awesome__subtitle">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
                </p>
            </div>

            <div class="values__cards">
                <!--CARD 1-->
                <div class="values__card">
                    <img src="img/contact/man.jpg" alt="">
                    <div class="values__card-info">
                        <h3 class="values__card-name">Lian Joy</h3>

                        <span class="values__card-desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
                        </span>
                    </div>
                </div>
                <!--CARD 2-->
                <div class="values__card">
                    <img src="img/contact/woman.jpg" alt="">
                    <div class="values__card-info">
                        <h3 class="values__card-name">Albert Thanh</h3>

                        <span class="values__card-desc">
                            Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.
                        </span>
                    </div>
                </div>
                <!--CARD 3-->
                <div class="values__card">
                    <img src="img/contact/coffee.jpg" alt="">
                    <div class="values__card-info">
                        <h3 class="values__card-name">Jenn Pereira</h3>

                        <span class="values__card-desc">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>`},
    {id: 6, name: `<i class="fas fa-search"></i>`}
]




const toHTML = card => `
<div class="things__card" >
                    <div class="things__card-link" data-btn="price" data-id="${card.id}"><i class="fas fa-times card-delete" data-btn="delete" data-id="${card.id}"></i><img src="${card.img}" alt="${card.alt}" class="things__card-pic"></div>
                </div>`
const toHeaderHTML = nav => `<li class="header__item">
                        <a href="" class="header__link" data-el="true" data-btn="header" data-id="${nav.id}">${nav.name}</a></li>`
const toNavHTML = nav => `
 <li class="thing__item">
                        <a href="#" class="things__link-nav" data-btn="btnNav" data-id="${nav.id}">${nav.name}</a>${nav.img}</li>`

function renderNav() {
    document.querySelector('.things__list').innerHTML = menu.map(toNavHTML).join('')
}

function headerRenderNav() {
    document.querySelector('.header__list').innerHTML = headerNav.map(toHeaderHTML).join('')
}
headerRenderNav()



function render() {
    const thingCards = document.querySelector('.things__cards')
    thingCards.innerHTML = cards.map(toHTML).join('')
    setTimeout(() => {
        thingCards.classList.add('fade')
    }, 100)
}
function unRender() {
    const thingCards = document.querySelector('.things__cards')
    thingCards.innerHTML = ''
    thingCards.classList.remove('fade')
}

function scrollToAnchor() {
    const anchor = document.querySelector('#scroll-item')
    anchor.scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
}


const navModal = $.modal({
    closable: true,
    width: '700px',
    height: '400px',
    overflow: 'auto',
    footerButtons: [
        {text: 'Close', type: 'light', handler() {
                navModal.close()
            }}
    ]
})


const priceModal = $.modal({
    title: 'PRICE FOR THIS PRODUCT',
    closable: true,
    width: '500px',
    footerButtons: [
        {text: 'Close', type: 'light', handler() {
            priceModal.close()
        }}
        ]
})


document.addEventListener('click',event => {

    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id

    const nav = menu.find(f => f.id === id)
    const card = cards.find(f => f.id === id)
    const header = headerNav.find(f => f.id === id)


    if (btnType === 'price'){
        priceModal.setContent(`
        <p>THE COST OF THIS ${card.title} IS: <b>${card.price}</b></p>
        `)
        priceModal.open()
        event.preventDefault()
    } else if (btnType === 'delete'){
        $.confirm({
            title: 'ARE YOU SURE?',
            content: `<p>ARE YOU SURE YOU WANT TO DELETE THIS ${card.title}?</p>`
        }).then( () => {
            cards = cards.filter(f => f.id !== id)
            render()
            if (cards.length === 0){
                setTimeout(() => {
                    alert('You have completely deleted all cards!');
                },300)
            }
        }).catch( () => {
        })
    } else if (btnType === 'btnNav'){
        navModal.setTitle(`${nav.title}`)
        navModal.setContent(`${nav.text}`)
        navModal.open()
        event.preventDefault()

    } else if (btnType === 'header'){
        const main = document.querySelector('.main')
        main.style.opacity = '0'
        main.style.transition = 'all .3s ease-in'
        setTimeout(() => {
            main.innerHTML = header.html
        }, 700)
        setTimeout(() => {
            main.style.opacity = '1'
        }, 700)
        if (pageYOffset > 0) {
            setTimeout(() => {
                scrollToAnchor()
            },100)
        }
        event.preventDefault()
    }
})




