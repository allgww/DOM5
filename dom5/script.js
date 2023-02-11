let todos = [{
    id: 1,
    task: "Buy milk :)",
    time: "18:44",
    completed: true,
  },
  {
    id: 2,
    task: "End the projects",
    time: "18:44",
    completed: false,
  },
  
  {
    id: 2,
    task: "Call mom",
    time: "18:44",
    completed: false,
  },
  {
    id: 2,
    task: "Sleep 10 hrs",
    time: "18:44",
    completed: false,
  },
  ];
  
  let form = document.forms.add_task_form;
  let container = document.querySelector(".container");
  
  form.onsubmit = (event) => {
    event.preventDefault();
  
    let todo = {
      id: Math.random(),
      completed: false,
      time: new Date().getHours() + ":" + new Date().getMinutes(),
    };
  
    let fm = new FormData(form);
  
    fm.forEach((value, key) => {
      todo[key] = value;
    });
  
  
  
    reload(todos)
  
    console.log(todos);
  };
  
  const reload = (arr) => {
    container.innerHTML = ""
  
    for (let item of arr) {
      let box = document.createElement("div");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let span = document.createElement("span");
  
      box.classList.add("box");
      img.classList.add("img");
      h3.classList.add("h3");
      span.classList.add("span");
  
      h3.innerHTML = item.task;
      img.src = "./X.png";
      span.innerHTML = item.time;
  
      container.append(box);
      box.append(img, h3, span);

    };
  }
  reload(todos)