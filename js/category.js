
// lọc sản phẩm theo tên

let catSelect = document.getElementById('categorySelect')
let nameSelect = document.getElementById('productNameSelect')
let cickBtnSelect = document.getElementsByClassName('header__search-btn')[0];
// lọc sản phẩm theo phân loại
catSelect.onchange = function(){
    // lựa chọn được select
    let selectId= this.value;
    for(let i=1;i<4;i++){
        let id="category"+i
        if(selectId==i){
            document.getElementById(id).style.display = "block"
        }
        else
        document.getElementById(id).style.display = "none"
    }
}

cickBtnSelect.onclick= function(){
    let productName= document.getElementsByClassName('product__panel-link')
    for( i=0 ; i < productName.length;i++){
     if(   productName[i].textContent==nameSelect.value)
    {
        alert(productName[i].textContent)
  return;
    } 
    
}
alert("Sản phẩm không có trong thư mục")

}
nameSelect.onchange= function(){
    let productName= document.getElementsByClassName('product__panel-link')
    for( i=0 ; i < productName.length;i++){
     if(   productName[i].textContent==nameSelect.value)
    {
        alert(productName[i].textContent)
  return;
    } 
    
}
alert("Sản phẩm không có trong thư mục")

}
// bấm vào header hiện danh mục tương ứng
let headernavSearch = document.getElementsByClassName("header__nav-item")
headernavSearch.ondbclick= function (){
    let headernavSearch = document.getElementsByClassName("header__nav-item")
    let searchId= this.value;
    for(let i=1;i<4;i++){
        let id="category"+i
        if(searchId==i){
            document.getElementById(id).style.display = "block"
        }
        else
        document.getElementById(id).style.display = "none"
    }
}
// tạm thời chưa chạy , có thời gian sẽ sửa sau