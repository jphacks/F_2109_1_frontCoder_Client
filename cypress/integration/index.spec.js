describe('Station1', function () {
  beforeEach(() => {
    // functionの前に必ず実行される
    // baseUrlのrootへ
    cy.visit('/index.html')
  })

  it('`<html>`タグが存在する', function () {
    cy.get('html').should('be.visible')
  })

  it('`適切な画像が貼り付けられている', function () {
    cy.get('img').should('have.attr', 'src', './sample_page/recpe.jpg')
  })

  it('タイトルは`<p>`タグで，`id`および`class`属性をもたない', function () {
    cy.get('p').should(($p) => {
      const firstP = $p.first()
      expect(firstP[0].className).to.be.not.ok
      expect(firstP[0].id).to.be.not.ok
    })
  })

  // 一番目の<span>もしくは<p>の内容が`descriptionTemplate`と一致することをテストする
  it('サブタイトルは`<span>`または`<p>`タグで，`id`および`class`属性をもたない', function () {
    cy.get('body')
      .then(($jQ) => {
        const spanTag = $jQ.find('span')
        return spanTag.length === 0 ? $jQ.find('p').eq(1) : spanTag
      })
      .then(($target) => {
        expect($target).to.not.be.empty
        expect($target[0].className).to.be.not.ok
        expect($target[0].id).to.be.not.ok
      })
  })
})
