// var cmts = [
//     {
//         id: 1,
//         content: "test",
//         user_id: 2
//     },
//     {
//         id: 2,
//         content: "test",
//         user_id: 2
//     },
//     {
//         id: 3,
//         content: "test",
//         user_id: 3
//     }
// ]
// var users = [
//     {
//         id: 1,
//         name: "test"
//     },
//     {
//         id: 2,
//         name: "test"
//     },
//     {
//         id: 3,
//         name: "test"
//     }
// ]
// // function
// var getCmts = function() {
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(cmts);
//         }, 1000)
//     })
// }
// var getUsersById = function(ids) {
//     return new Promise(function(resolve){
//         var result = users.filter(function(user){
//             return ids.includes(user.id);
//         })
//         resolve(result);
//     })
// }
// //process
// getCmts()
//     .then(function(cmts){
//         var user_ids = cmts.map(function(cmt){
//             return cmt.user_id;
//         });
//         return getUsersById(user_ids)
//             .then(function(data){
//                 return {
//                     users: data,
//                     cmts: cmts
//                 }
//             })
//     })
//     .then(function(data){
//         var block = document.querySelector("ul");
//         var html = "";
//         data.cmts.forEach(function(cmt){
//             var user = data.users.find(function(user){
//                 return user.id == cmt.user_id;
//             })
//             html += `<li>${user.name}: ${cmt.content}</li>`;
//         })
//         block.innerHTML = html;
//     })