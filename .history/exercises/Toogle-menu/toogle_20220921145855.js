.menu {
    width: 300px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    list-style: none;
    transform: translateX(100%);
    transition: transform 0.25s linear;
  }
  .menu.is-show {
    transform: translateX(0);
  }
  .menu-link {
    display: block;
    padding: 20px 15px;
    color: #333;
    border-bottom: 1px solid #eee;
  }
  .header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .menu-toggle {
    cursor: pointer;
    font-size: 30px;
    position: relative;
    z-index: 9999;
  }