function createRect(width, height) {

    let rect = {width, height};
    rect.getArea = () =>{
        return (rect.width*rect.height)
    };
    return (rect)
}
console.log(createRect (10,5))