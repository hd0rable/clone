// document.addEventListener('DOMContentLoaded', function() {
//   var navLists = document.querySelectorAll('.nav2list');

//   navLists.forEach(function(navList) {
//       navList.addEventListener('mouseover', function() {
//           var menuInner = this.querySelector('.menu_inner');
//           if (menuInner) {
//               menuInner.style.display = 'block';
//           }
//       });

//       navList.addEventListener('mouseout', function() {
//           var menuInner = this.querySelector('.menu_inner');
//           if (menuInner) {
//               menuInner.style.display = 'none';
//           }
//       });
//   });
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var introMenu = document.querySelector('.nav2list:first-child'); 
//   var menumouse =document.querySelector('.menu_wrap');
//   var menuInner =document.querySelector('.menu_inner.intro');

//   introMenu.addEventListener('mouseover', function() {
//         menumouse.style.display = 'block';
//         menuInner.style.display = 'block';
//   });

//   introMenu.addEventListener('mouseout', function() {
//     menuInner.addEventListener('mouseout', function() {
//           menumouse.style.display ='none';
//           menuInner.style.display = 'none';
//       });
//         menumouse.style.display ='none';
//         menuInner.style.display = 'none';
//   });
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var introMenu = document.querySelector('.nav2list:first-child'); 
//   var menumouse = document.querySelector('.menu_wrap');
//   var menuInner = document.querySelector('.menu_inner.intro');

//   var menuInnerHovered = false; // 메뉴 인너에 마우스가 올라가 있는지 여부를 추적합니다.

//   introMenu.addEventListener('mouseover', function() {
//     menumouse.style.display = 'block';
//     menuInner.style.display = 'block';
//   });

//   introMenu.addEventListener('mouseout', function() {
//     // 메뉴 인너에 마우스가 올라가 있지 않으면 메뉴를 닫습니다.
//     if (!menuInnerHovered) {
//       menumouse.style.display = 'none';
//       menuInner.style.display = 'none';
//     }
//   });

//   // 메뉴 인너에 마우스가 올라가면 해당 상태를 표시합니다.
//   menuInner.addEventListener('mouseover', function() {
//     menuInnerHovered = true;
//   });

//   // 메뉴 인너에서 마우스가 떠나면 해당 상태를 표시합니다.
//   menuInner.addEventListener('mouseout', function() {
//     menuInnerHovered = false;
//     menumouse.style.display = 'none';
//     menuInner.style.display = 'none';
//   });
// });
document.addEventListener('DOMContentLoaded', function() {
  var navLists = document.querySelectorAll('.nav2list');
  var menumouse = document.querySelector('.menu_wrap');

  navLists.forEach(function(navList, index) {
    var menuInner;
    var selectmenu;
    var menuInnerHovered = false; // 메뉴 인너에 마우스가 올라가 있는지 여부를 추적합니다.

    if (index === 0) {
      menuInner = navList.querySelector('.menu_inner.intro');
      // selectmenu = document.querySelector('.nav2list:nth-of-type(1)'); 
    } else if (index === 1) {
      menuInner = navList.querySelector('.menu_inner.entrance');
    } else if (index === 2) {
      menuInner = navList.querySelector('.menu_inner.university');
    } else if (index === 3) {
      menuInner = navList.querySelector('.menu_inner.collegeinner');
    } else if (index === 4) {
      menuInner = navList.querySelector('.menu_inner.life');
    } else if (index === 5) {
      menuInner = navList.querySelector('.menu_inner.data');
    }

    // navList.addEventListener('mouseenter', function() {
    //   if (menuInner) {
    //     menuInner.style.display = 'block';
    //   }
    // });

    // navList.addEventListener('mouseleave', function() {
    //   if (menuInner) {
    //     menuInner.style.display = 'none';
    //   }
    // });

    navList.addEventListener('mouseover', function() {
      menumouse.style.display = 'block';
      menuInner.style.display = 'block';
    });
  
    navList.addEventListener('mouseout', function() {
      // 메뉴 인너에 마우스가 올라가 있지 않으면 메뉴를 닫습니다.
      if (!menuInnerHovered) {
        menumouse.style.display = 'none';
        menuInner.style.display = 'none';
      }
    });
  
    // // 메뉴 인너에 마우스가 올라가면 해당 상태를 표시합니다.
    // menuInner.addEventListener('mouseover', function() {
    //   menuInnerHovered = true;
    // });
  
    // // 메뉴 인너에서 마우스가 떠나면 해당 상태를 표시합니다.
    // menuInner.addEventListener('mouseout', function() {
    //   menuInnerHovered = false;
    //   menumouse.style.display = 'none';
    //   menuInner.style.display = 'none';
    // });

  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   var navLists = document.querySelectorAll('.nav2list');
//   var menumouse = document.querySelector('.menu_wrap');

//   navLists.forEach(function(navList) {
//     var menuInner = navList.querySelector('.menu_inner');

//     navList.addEventListener('mouseenter', function() {
//       menumouse.style.display = 'block';
//       menuInner.style.display = 'block';
//     });

//     navList.addEventListener('mouseleave', function() {
//       menumouse.style.display = 'none';
//       menuInner.style.display = 'none';
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var navLists = document.querySelectorAll('.nav2list');
//   var menumouse = document.querySelector('.menu_wrap');

//   navLists.forEach(function(navList, index) {
//     var menuInner;

//     if (index === 0) {
//       menuInner = navList.querySelector('.menu_inner.intro');
//     } else if (index === 1) {
//       menuInner = navList.querySelector('.menu_inner.entrance');
//     } else if (index === 2) {
//       menuInner = navList.querySelector('.menu_inner.university');
//     } else if (index === 3) {
//       menuInner = navList.querySelector('.menu_inner.collegeinner');
//     } else if (index === 4) {
//       menuInner = navList.querySelector('.menu_inner.life');
//     } else if (index === 5) {
//       menuInner = navList.querySelector('.menu_inner.data');
//     }

//     navList.addEventListener('mouseenter', function() {
//       menumouse.style.display = 'block';
//       menuInner.style.display = 'block';
//     });
  
//     navList.addEventListener('mouseleave', function() {
//       menumouse.style.display = 'none';
//       menuInner.style.display = 'none';
//     });

//     // 메뉴 인너에 마우스가 올라간 상태에서도 메뉴를 유지하기 위한 처리
//     menuInner.addEventListener('mouseenter', function() {
//       menumouse.style.display = 'block';
//       menuInner.style.display = 'block';
//     });
  
//     menuInner.addEventListener('mouseleave', function() {
//       menumouse.style.display = 'none';
//       menuInner.style.display = 'none';
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var introMenu = document.querySelector('.nav2list:first-child');

//   introMenu.addEventListener('mouseenter', function() {
//       var menuInner = this.querySelector('.menu_inner.intro');
//       if (menuInner) {
//           menuInner.style.display = 'block';
//       }
//   });

//   introMenu.addEventListener('mouseleave', function() {
//       var menuInner = this.querySelector('.menu_inner.intro');
//       if (menuInner) {
//           menuInner.style.display = 'none';
//       }
//   });
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var navLists = document.querySelectorAll('.nav2list');

//   // "입학안내"에 대한 이벤트 핸들러 추가
//   navLists[1].addEventListener('mouseenter', function() {
//       var menuInner = this.querySelector('.menu_inner.entrance');
//       if (menuInner) {
//           menuInner.style.display = 'block';
//       }
//   });
//   navLists[1].addEventListener('mouseleave', function() {
//       var menuInner = this.querySelector('.menu_inner.entrance');
//       if (menuInner) {
//           menuInner.style.display = 'none';
//       }
//   });

//   // "대학/대학원"에 대한 이벤트 핸들러 추가
//   navLists[2].addEventListener('mouseenter', function() {
//       var menuInner = this.querySelector('.menu_inner.university');
//       if (menuInner) {
//           menuInner.style.display = 'block';
//       }
//   });
//   navLists[2].addEventListener('mouseleave', function() {
//       var menuInner = this.querySelector('.menu_inner.university');
//       if (menuInner) {
//           menuInner.style.display = 'none';
//       }
//   });

//   // "학사안내"에 대한 이벤트 핸들러 추가
//   navLists[3].addEventListener('mouseenter', function() {
//       var menuInner = this.querySelector('.menu_inner.collegeinner');
//       if (menuInner) {
//           menuInner.style.display = 'block';
//       }
//   });
//   navLists[3].addEventListener('mouseleave', function() {
//       var menuInner = this.querySelector('.menu_inner.collegeinner');
//       if (menuInner) {
//           menuInner.style.display = 'none';
//       }
//   });

//   // "대학생활"에 대한 이벤트 핸들러 추가
//   navLists[4].addEventListener('mouseenter', function() {
//       var menuInner = this.querySelector('.menu_inner.life');
//       if (menuInner) {
//           menuInner.style.display = 'block';
//       }
//   });
//   navLists[4].addEventListener('mouseleave', function() {
//       var menuInner = this.querySelector('.menu_inner.life');
//       if (menuInner) {
//           menuInner.style.display = 'none';
//       }
//   });

//   // "정보광장"에 대한 이벤트 핸들러 추가
//   navLists[5].addEventListener('mouseenter', function() {
//       var menuInner = this.querySelector('.menu_inner.data');
//       if (menuInner) {
//           menuInner.style.display = 'block';
//       }
//   });
//   navLists[5].addEventListener('mouseleave', function() {
//       var menuInner = this.querySelector('.menu_inner.data');
//       if (menuInner) {
//           menuInner.style.display = 'none';
//       }
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var navLists = document.querySelectorAll('.nav2list');

//   navLists.forEach(function(navList) {
//       navList.addEventListener('mouseenter', function() {
//           var menuInner = this.querySelector('.menu_inner');
//           if (menuInner) {
//               menuInner.style.display = 'block';
//           }
//       });

//       navList.addEventListener('mouseleave', function() {
//           var menuInner = this.querySelector('.menu_inner');
//           if (menuInner) {
//               menuInner.style.display = 'none';
//           }
//       });
//   });
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var navLists = document.querySelectorAll('.nav2list');

//   navLists.forEach(function(navList) {
//       navList.addEventListener('mouseenter', function() {
//           var menuInner = this.querySelector('.menu_inner');
//           if (menuInner) {
//               menuInner.style.display = 'block';
//           }
//       });

//       navList.addEventListener('mouseleave', function() {
//           var menuInner = this.querySelector('.menu_inner');
//           if (menuInner) {
//               menuInner.style.display = 'none';
//           }
//       });
//   });
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var navLists = document.querySelectorAll('.nav2list');

//   navLists.forEach(function(navList, index) {
//       var menuInner;

//       if (index === 0) {
//           menuInner = navList.querySelector('.menu_inner.intro');
//       } else if (index === 1) {
//           menuInner = navList.querySelector('.menu_inner.entrance');
//       } else if (index === 2) {
//           menuInner = navList.querySelector('.menu_inner.university');
//       } else if (index === 3) {
//           menuInner = navList.querySelector('.menu_inner.collegeinner');
//       } else if (index === 4) {
//           menuInner = navList.querySelector('.menu_inner.life');
//       } else if (index === 5) {
//           menuInner = navList.querySelector('.menu_inner.data');
//       }

//       navList.addEventListener('mouseenter', function() {
//           if (menuInner.intro) {
//               menuInner.style.display = 'block';
//           }
//       });

//       navList.addEventListener('mouseleave', function() {
//           if (menuInner.intro) {
//               menuInner.style.display = 'none';
//           }
//       });
//   });
// });

