module.exports = {
  "spec.cy.ts": {
    "should visit": {
      "1": "<body>\n  <div id=\"application\"\n    is=\"application\">\n    <script src=\"//localhost:35729/livereload.js?snipver=1\"\n      async=\"\"\n      defer=\"\"></script>\n\n    <!-- Application bundle -->\n    <script type=\"text/javascript\"\n      src=\"assets/js/bundle.js\"></script>\n    <div id=\"mainView\"></div>\n\n  </div>\n</body>",
      "body": "<body>\n  <div id=\"application\"\n    is=\"application\">\n    <script src=\"//localhost:35729/livereload.js?snipver=1\"\n      async=\"\"\n      defer=\"\"></script>\n\n    <!-- Application bundle -->\n    <script type=\"text/javascript\"\n      src=\"assets/js/bundle.js\"></script>\n    <div id=\"mainView\"\n      is=\"articles\">\n      <div class=\"home-page\">\n        <div id=\"headerView\"\n          is=\"header_view\">\n          <nav class=\"navbar navbar-light\">\n            <div class=\"container\"><a class=\"navbar-brand\"\n                href=\"/\">conduit</a>\n              <ul class=\"nav navbar-nav pull-xs-right\">\n                <li class=\"nav-item\"><a class=\"nav-link active\"\n                    href=\"#/\">\n                    &nbsp;\n                    Home</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\"\n                    href=\"#/login\">\n                    &nbsp;\n                    Sign In</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\"\n                    href=\"#/register\">\n                    &nbsp;\n                    Sign Up</a></li>\n              </ul>\n            </div>\n          </nav>\n        </div>\n        <div id=\"bannerView\"\n          is=\"banner_view\">\n          <div class=\"banner\">\n            <div class=\"container\">\n              <h1 class=\"logo-font\">conduit</h1>\n              <p>A place to share your <a class=\"spotlink\"\n                  href=\"https://riot.js.org\"\n                  target=\"blank\">RIOT</a> knowledge.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"container page\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <div id=\"articleTabView\"\n                is=\"article_tab_view\">\n                <div class=\"feed-toggle\">\n                  <ul class=\"nav nav-pills outline-active\">\n                    <li class=\"nav-item\"><a class=\"nav-link active\">Global\n                        Feed</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div id=\"articlesTableView\"\n                is=\"articles_table_view\">\n                <div class=\"article-preview\">\n                  <div class=\"article-meta\"><a><img\n                        src=\"https://api.realworld.io/images/demo-avatar.png\"></a>\n                    <div class=\"info\"><a class=\"author author-link\">GI</a><span\n                        class=\"date\">January 20th</span></div><button\n                      class=\"btn btn-sm pull-xs-right btn-outline-primary\"><i\n                        class=\"ion-heart\"></i>1</button>\n                  </div><a class=\"preview-link\">\n                    <h1>Title</h1>\n                    <p>Description</p><span>Read more...</span>\n                    <ul class=\"tag-list\">\n                      <li class=\"tag-default tag-pill tag-outline\">\n                        implementations</li>\n                    </ul>\n                  </a>\n                </div>\n              </div>\n              <div id=\"pagenationView\"\n                is=\"pagenation_view\">\n                <ul class=\"pagination\"></ul>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div id=\"tagsView\"\n                is=\"tags_view\">\n                <div class=\"sidebar\">\n                  <p>Popular Tags</p>\n                  <div class=\"tag-list\"><a class=\"tag-pill tag-default\"\n                      href=\"#/articles/tag/newTag\">newTag</a><a\n                      class=\"tag-pill tag-default\"\n                      href=\"#/articles/tag/Oldest\">Oldest</a></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"footerView\"\n          is=\"footer_view\">\n          <footer>\n            <div class=\"container\"><a href=\"/\"\n                class=\"logo-font\">conduit</a><span class=\"attribution\">\n                An interactive learning project from <a\n                  href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design\n                licensed under MIT.\n              </span></div>\n          </footer>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</body>",
      "bo": "<body>\n  <div id=\"application\"\n    is=\"application\">\n    <script src=\"//localhost:35729/livereload.js?snipver=1\"\n      async=\"\"\n      defer=\"\"></script>\n\n    <!-- Application bundle -->\n    <script type=\"text/javascript\"\n      src=\"assets/js/bundle.js\"></script>\n    <div id=\"mainView\"\n      is=\"articles\">\n      <div class=\"home-page\">\n        <div id=\"headerView\"\n          is=\"header_view\">\n          <nav class=\"navbar navbar-light\">\n            <div class=\"container\"><a class=\"navbar-brand\"\n                href=\"/\">conduit</a>\n              <ul class=\"nav navbar-nav pull-xs-right\">\n                <li class=\"nav-item\"><a class=\"nav-link active\"\n                    href=\"#/\">\n                    &nbsp;\n                    Home</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\"\n                    href=\"#/login\">\n                    &nbsp;\n                    Sign In</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\"\n                    href=\"#/register\">\n                    &nbsp;\n                    Sign Up</a></li>\n              </ul>\n            </div>\n          </nav>\n        </div>\n        <div id=\"bannerView\"\n          is=\"banner_view\">\n          <div class=\"banner\">\n            <div class=\"container\">\n              <h1 class=\"logo-font\">conduit</h1>\n              <p>A place to share your <a class=\"spotlink\"\n                  href=\"https://riot.js.org\"\n                  target=\"blank\">RIOT</a> knowledge.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"container page\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <div id=\"articleTabView\"\n                is=\"article_tab_view\">\n                <div class=\"feed-toggle\">\n                  <ul class=\"nav nav-pills outline-active\">\n                    <li class=\"nav-item\"><a class=\"nav-link active\">Global\n                        Feed</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div id=\"articlesTableView\"\n                is=\"articles_table_view\">\n                <div class=\"article-preview\">\n                  <div class=\"article-meta\"><a><img\n                        src=\"https://api.realworld.io/images/demo-avatar.png\"></a>\n                    <div class=\"info\"><a class=\"author author-link\">GI</a><span\n                        class=\"date\">January 20th</span></div><button\n                      class=\"btn btn-sm pull-xs-right btn-outline-primary\"><i\n                        class=\"ion-heart\"></i>1</button>\n                  </div><a class=\"preview-link\">\n                    <h1>Title</h1>\n                    <p>Description</p><span>Read more...</span>\n                    <ul class=\"tag-list\">\n                      <li class=\"tag-default tag-pill tag-outline\">\n                        implementations</li>\n                    </ul>\n                  </a>\n                </div>\n              </div>\n              <div id=\"pagenationView\"\n                is=\"pagenation_view\">\n                <ul class=\"pagination\"></ul>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div id=\"tagsView\"\n                is=\"tags_view\">\n                <div class=\"sidebar\">\n                  <p>Popular Tags</p>\n                  <div class=\"tag-list\"><a class=\"tag-pill tag-default\"\n                      href=\"#/articles/tag/newTag\">newTag</a><a\n                      class=\"tag-pill tag-default\"\n                      href=\"#/articles/tag/Oldest\">Oldest</a></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"footerView\"\n          is=\"footer_view\">\n          <footer>\n            <div class=\"container\"><a href=\"/\"\n                class=\"logo-font\">conduit</a><span class=\"attribution\">\n                An interactive learning project from <a\n                  href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design\n                licensed under MIT.\n              </span></div>\n          </footer>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</body>",
      "body2": "<body>\n  <div id=\"application\"\n    is=\"application\">\n    <script src=\"//localhost:35729/livereload.js?snipver=1\"\n      async=\"\"\n      defer=\"\"></script>\n\n    <!-- Application bundle -->\n    <script type=\"text/javascript\"\n      src=\"assets/js/bundle.js\"></script>\n    <div id=\"mainView\"\n      is=\"articles\">\n      <div class=\"home-page\">\n        <div id=\"headerView\"\n          is=\"header_view\">\n          <nav class=\"navbar navbar-light\">\n            <div class=\"container\"><a class=\"navbar-brand\"\n                href=\"/\">conduit</a>\n              <ul class=\"nav navbar-nav pull-xs-right\">\n                <li class=\"nav-item\"><a class=\"nav-link active\"\n                    href=\"#/\">\n                    &nbsp;\n                    Home</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\"\n                    href=\"#/login\">\n                    &nbsp;\n                    Sign In</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\"\n                    href=\"#/register\">\n                    &nbsp;\n                    Sign Up</a></li>\n              </ul>\n            </div>\n          </nav>\n        </div>\n        <div id=\"bannerView\"\n          is=\"banner_view\">\n          <div class=\"banner\">\n            <div class=\"container\">\n              <h1 class=\"logo-font\">conduit</h1>\n              <p>A place to share your <a class=\"spotlink\"\n                  href=\"https://riot.js.org\"\n                  target=\"blank\">RIOT</a> knowledge.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"container page\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <div id=\"articleTabView\"\n                is=\"article_tab_view\">\n                <div class=\"feed-toggle\">\n                  <ul class=\"nav nav-pills outline-active\">\n                    <li class=\"nav-item\"><a class=\"nav-link active\">Global\n                        Feed</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div id=\"articlesTableView\"\n                is=\"articles_table_view\">\n                <div class=\"article-preview\">\n                  <div class=\"article-meta\"><a><img\n                        src=\"https://api.realworld.io/images/demo-avatar.png\"></a>\n                    <div class=\"info\"><a class=\"author author-link\">GI</a><span\n                        class=\"date\">January 20th</span></div><button\n                      class=\"btn btn-sm pull-xs-right btn-outline-primary\"><i\n                        class=\"ion-heart\"></i>1</button>\n                  </div><a class=\"preview-link\">\n                    <h1>Title</h1>\n                    <p>Description</p><span>Read more...</span>\n                    <ul class=\"tag-list\">\n                      <li class=\"tag-default tag-pill tag-outline\">\n                        implementations</li>\n                    </ul>\n                  </a>\n                </div>\n              </div>\n              <div id=\"pagenationView\"\n                is=\"pagenation_view\">\n                <ul class=\"pagination\"></ul>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div id=\"tagsView\"\n                is=\"tags_view\">\n                <div class=\"sidebar\">\n                  <p>Popular Tags</p>\n                  <div class=\"tag-list\"><a class=\"tag-pill tag-default\"\n                      href=\"#/articles/tag/newTag\">newTag</a><a\n                      class=\"tag-pill tag-default\"\n                      href=\"#/articles/tag/Oldest\">Oldest</a></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"footerView\"\n          is=\"footer_view\">\n          <footer>\n            <div class=\"container\"><a href=\"/\"\n                class=\"logo-font\">conduit</a><span class=\"attribution\">\n                An interactive learning project from <a\n                  href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design\n                licensed under MIT.\n              </span></div>\n          </footer>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</body>"
    }
  },
  "__version": "10.0.2"
}
