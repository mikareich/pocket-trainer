import axios from 'axios'

const sampleVocabularyBox = document.querySelector('.vocabulary-box#sample')
const innerMain = document.querySelector('main>.inner')
// fetch index
axios.get('./index.json').then(({ data }) => {
  data.forEach((box) => {
    // clone box
    const boxDIV = sampleVocabularyBox.cloneNode(true)
    // detach from instance
    boxDIV.removeAttribute('id')

    // insert properties
    boxDIV.querySelector('#lang').textContent = box.lang
    boxDIV.querySelector('#title').textContent = box.title
    boxDIV.querySelector('#creator').textContent = `@${box.creator}`

    // display box
    innerMain.appendChild(boxDIV)

    // link to query
    boxDIV.addEventListener(
      'click',
      () => (window.location.href = `query.html?queryPath=${box.path}`)
    )
  })
})
