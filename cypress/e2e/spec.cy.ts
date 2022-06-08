describe('spec.cy.ts', () => {
  it('should visit', () => {
    const base = "https://conduit.productionready.io/api"
    cy.intercept(base+'/articles?limit=10', (req) => {
  
      const res = {
        articles: [{slug: "slug"
        , title: "Title"
        , description: "Description"
        , body: "body"
        , favorited: false, favoritesCount: 1, createdAt: "2021-11-24T12:11:08.212Z",
        updatedAt: "2021-11-24T12:11:08",
        author: {username: "GI", following: false, bio: null, image: "https://api.realworld.io/images/demo-avatar.png"},
         tagList: ["implementations"]}],
        articlesCount: 1,
      }
      req.reply(res)
    }).as('articles')
    cy.intercept(base+'/tags', (req) => {
  
      const res = {
      tags: ["newTag", "Oldest"]
      }
      req.reply(res)
    }).as('tags')
    cy.visit('localhost:8000')
    cy.wait('@tags')
    cy.wait('@articles')
    cy.get("body").snapshot({name: 'body'})
    cy.percySnapshot()
  })
})
