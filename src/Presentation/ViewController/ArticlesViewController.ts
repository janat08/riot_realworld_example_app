import ArticlesUseCase from "../../Domain/UseCase/ArticlesUseCase"
import { RiotCoreComponent } from "riot"
import ArticleTabItem from "../../Domain/Model/ArticleTabItem"
import Profile from "../../Domain/Model/Profile"
import Article from "../../Domain/Model/Article"

export default class ArticlesViewController {

    // Outlets
    view: RiotCoreComponent|any
    headerView: RiotCoreComponent|any
    bannerView: RiotCoreComponent|any
    articleTabView: RiotCoreComponent|any
    articlesTableView: RiotCoreComponent|any
    tagsView: RiotCoreComponent|any
    pagenationView: RiotCoreComponent|any

    // Usecase
    private useCase = new ArticlesUseCase()

    // Lifecycle
    viewWillAppear = () => {
        console.log("viewWillAppear")
    }

    viewDidAppear = () => {
        this.headerView.setItems( this.useCase.menuItems() )
        this.bannerView.setVisible( !this.useCase.isLoggedIn() )
        this.articleTabView.setItems( this.useCase.tabItems() )

        this.useCase.requestArticles().then( (container) => {
            this.articlesTableView.setArticles( container.articles )

            this.pagenationView.shownPage = this.useCase.currentPage()
            this.pagenationView.setCountOfPage( this.useCase.pageCount() )
        })

        this.useCase.requestTags().then( (tags) => {
            this.tagsView.setTagWords( tags )
        })
    }

    viewWillDisappear = () => {
        console.log("viewWillDisappear")
    }

    viewDidDisappear = () => {
        console.log("viewDidDisappear")
    }

    // Actions
    didSelectTab = ( item: ArticleTabItem ) => {
        this.useCase.jumpToSubPath( item.identifier )
    }
    didSelectProfile = ( profile: Profile ) => {
        this.useCase.jumpToProfileScene (profile)
    }
    didSelectArticle = ( article: Article ) => {
        this.useCase.jumpToArticleScene(article)
    }

    didFavoriteArticle = ( article: Article ) => {
        this.useCase.toggleFavorite(article).then( (articles) => {
            if ( articles === null ) { return }
            this.articlesTableView.setArticles( articles )
        })
    }
    didSelectPageNumber = ( page: number ) => {
        this.useCase.jumpPage(page)
    }
}
