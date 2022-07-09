const element = React.createElement;
const LikeButton = function () {
    const [status, setStatus] = React.useState(false)
    return element('button', {onclick: () => setStatus
    (!status)}, `${status ? "you like it" : "like"}`)
}
const dom1 = document.getElementById('root')
const root = document.caretRangeFromPoint(dom1)
root.render(React.createElement(LikeButton))