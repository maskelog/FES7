const dropTarget = document.querySelector('.drop-target');
const dragItems = document.querySelectorAll('.drag-item');

dragItems.forEach((item) => {
  item.addEventListener('dragstart', () => {
    setTimeout(() => {
      item.classList.add('dragging')
    },0)

  })
  item.addEventListener('dragend', () => item.classList.remove('dragging'))
})

function handleDragOver(e) {
  e.preventDefault();
  const draggingItem = dropTarget.querySelector('.dragging');
  const notDraggingItems = Array.from(dropTarget.querySelectorAll('.drag-item:not(.dragging)'));

  const nextItem = notDraggingItems.find((item) => {   
    /*
    clientY : 뷰포트 내 마우스 y 좌표
    offsetTop : 뷰포트 내에서 요소까지의 y좌표
    offsetHeight : 요소의 높이 (boder 포함)
    */
    return e.clientY <= item.offsetTop + item.offsetHeight / 2
    // console.log('clientY: ', e.clientY)
    // console.log('offsetTop: ', item.offsetTop)
    // console.log('offsetHeight', item.offsetHeight)
  })
  dropTarget.insertBefore(draggingItem, nextItem)
}



dropTarget.addEventListener('dragover', handleDragOver)
// dropTarget.addEventListener('dragenter')


// My_Code
// (() => {
//   const $ = (selector) => document.querySelectorAll(selector);
//   const draggables = $('.drag-item');
//   const containers = $('.drop-target');

//   draggables.forEach(el => {
//     el.addEventListener('dragstart', () => {
//       el.classList.add('dragging');
//     });

//     el.addEventListener('dragend', () => {
//       el.classList.remove('dragging');
//     });
//   });

//   function getDragAfterElement(container, y) {
//     const draggableElements = [...container.querySelectorAll('.drag-item:not(.dragging)')];

//     return draggableElements.reduce((closest, child) => {
//       const box = child.getBoundingClientRect();
//       const offset = y - box.top - box.height / 2;

//       if (offset < 0 && offset > closest.offset) {
//         return { offset: offset, element: child };
//       } else {
//         return closest;
//       }
//     }, { offset: Number.NEGATIVE_INFINITY }).element;
//   }

//   containers.forEach(container => {
//     container.addEventListener('dragover', e => {
//       e.preventDefault();

//       const afterElement = getDragAfterElement(container, e.clientY);
//       const draggable = document.querySelector('.dragging');

//       if (afterElement) {
//         container.insertBefore(draggable, afterElement);
//       } else {
//         container.appendChild(draggable);
//       }
//     });
//   });
// })();
