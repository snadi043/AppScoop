const bookDisplay = (WrappedComponent) => {
    const Bookdisplay = () => {
        if (WrappedComponent.name === 'HomePage') {
            return (<WrappedComponent showSubtitle={false} />)
        } else if (WrappedComponent.name === 'BookDetails') {
            return (<WrappedComponent showSubtitle={true} />)
        }
    }
    return Bookdisplay;
}

export default bookDisplay;