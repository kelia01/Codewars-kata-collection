class Cube{
  constructor (length){
    this.length = length;
  }
  get surfaceArea(){
    return (6*this.length*this.length);
  }
  set surfaceArea(area){
    if(area <= 0) {
      return `invalid area`;
    }
    this.length = Math.sqrt(area / 6);
  }
  
   get volume(){
    return (this.length*this.length*this.length);
  }
  set volume(vol){
    if(vol <= 0) {
      return `invalid volume`;
    }
    this.length = Math.cbrt(vol);
  }
}