

  function workshop() {
  for (var i = 0; i < work.length; i++) {
    if(i%3===0) {
      var row = document.createElement('div');
      row.className = "row";
      row.id = "works-row-" + i/3;

      $('#workshops').append(row);

    } 
    var holder = document.createElement('div');
    holder.className = "col s12 m4";

    var card = document.createElement('article');
    card.className = "material-card Red";

    var spant= document.createElement('span');
    spant.innerHTML=work[i].heading;
    card.appendChild(spant);



    var content = document.createElement('div');
    content.className = "mc-content"

    var imgc = document.createElement('div');
    cardcc.className = "img-container"


    var img=document.createElement('img')
    img.className="img-responsive"
    img.src=work[i].image

    imgc.appendChild(img)


    var desc=document.createElement('div')
    desc.className="mc-description"
    desc.innerHTML=work[i].desc

    content.appendChild(imgc)
    content.appendChild(desc)
    card.appendChild(content)

    var anc=document.createElement('a')
    anc.className="mc-btn-action"

    var icon=document.createElement('i')
    icon.className="fa fa-bars"

    anc.appendChild(icon)
    card.appendChild(anc)



    holder.appendChild(card);

    card.id = "works-"+i;


    $('#works-row-'+parseInt(i/3)).append(holder);
  }
}