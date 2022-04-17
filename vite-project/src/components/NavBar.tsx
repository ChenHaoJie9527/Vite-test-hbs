import { defineComponent } from "vue";
import style from "../styles/Navbar.module.scss";
export default defineComponent({
    name: 'NavBar',
    render() {
        return (
          <div class={style.NavBart}>
            NavBart <span class={style["NavBart.active"]}>跟我走吧</span>{" "}
          </div>
        );
    }
})
