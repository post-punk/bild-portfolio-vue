<template>
    <div>
        <!-- ERROR 404 PAGE -->
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <h1>Page not found :(</h1>
            <pre>
                                             .""--..__
                     _                     []       ``-.._
                  .'` `'.                  ||__           `-._
                 /    ,-.\                 ||_ ```---..__     `-.
                /    /:::\\               /|//}          ``--._  `.
                |    |:::||              |////}                `-. \
                |    |:::||             //'///                    `.\
                |    |:::||            //  ||'                      `|
                /    |:::|/        _,-//\  ||
               /`    |:::|`-,__,-'`  |/  \ ||
             /`  |   |'' ||           \   |||
           /`    \   |   ||            |  /||
         |`       |  |   |)            \ | ||
        |          \ |   /      ,.__    \| ||
        /           `         /`    `\   | ||
       |                     /        \  / ||
       |                     |        | /  ||
       /         /           |        `(   ||
      /          .           /          )  ||
     |            \          |     ________||
    /             |          /     `-------.|
   |\            /          |              ||
   \/`-._       |           /              ||
    //   `.    /`           |              ||
   //`.    `. |             \              ||
  ///\ `-._  )/             |              ||
 //// )   .(/               |              ||
 ||||   ,'` )               /              //
 ||||  /                    /             || 
 `\\` /`                    |             // 
     |`                     \            ||  
    /                        |           //  
  /`                          \         //   
/`                            |        ||    
`-.___,-.      .-.        ___,'        (/    
         `---'`   `'----'`                                                                                                            
            </pre>
        </div>
    </div>
</template>

<script>
import CalloutTop from '../CalloutTop.vue';
export default {
    data() {
        return {
            calloutTitle: "Error 404",
        }
    },
    components: {
        CalloutTop,
    },


}
</script>

<style>
    h1 {
        margin-top: 2rem;
    }
    pre {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
</style>
