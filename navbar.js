$('document').ready(()=>{
    $(window).on('resize', function(event){
        let windowSize = $(window).width(); // Could've done $(this).width()
         if(windowSize >768) {
             $('.collapse').removeAttr('style');
             $('.form').removeAttribute('style');
         }
    });

    $('button').click(function () {
        //alert($(this).attr("data-target"))

        if($(this).attr("data-toggle")==='collapse')
        {
            //alert($(this).attr("data-target"));
            let acid = $($(this).attr("data-target")).attr("data-parent");
            let temp=$(this).attr("data-target")
            let id = temp.substr(1,temp.length)
            //alert(id)


            $("div[data-parent='"+acid+"'][id!='"+id+"']").slideUp("slow");
            $($(this).attr("data-target")).slideToggle("slow");


        }
    })
});