class SaveBahan extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set dataBahan (data) {
    this._dataBahan = data
    this.render()
  }

  render () {
    this.innerHTML = `
      <p>${this._dataBahan}</p>
    `
  }
}

customElements.define('save-bahan', SaveBahan)
