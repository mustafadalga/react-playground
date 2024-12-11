import { ButtonWithIconElement } from "./components/ButtonWithIconElement.tsx";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { ButtonWithIconComponent } from "./components/ButtonWithIconComponent.tsx";
import { ButtonWithIconRenderFunc } from "./components/ButtonWithIconRenderFunc.tsx";


const AccessAlarmIcon = (props) => (
    <AccessAlarmsIcon {...props} fontSize="large" color="error" />
);
const AlarmIconWithHoverForElement = (props) => {
    return (
        <AccessAlarmsIcon
            // don't forget to spread all the props!
            // otherwise you'll lose all the defaults the button is setting
            {...props}
            // and just override the color based on the value of `isHover`
            color={props.isHovered ? 'primary' : 'warning'}
                fontSize="large"
        />
    );
};


function App() {
  return (
    <section className="grid gap-5">
      <ButtonWithIconElement icon={<AlarmIconWithHoverForElement/>}>
        button here
      </ButtonWithIconElement>


        <ButtonWithIconComponent Icon={AlarmIconWithHoverForElement}>
            button here
        </ButtonWithIconComponent>;


        <ButtonWithIconRenderFunc
            renderIcon={(settings) =>  <AccessAlarmsIcon {...settings} fontSize="large"

                                                         color={settings.isHovered ? "primary" : "warning"}
            />} >
            button here
        </ButtonWithIconRenderFunc>
    </section>
  )
}

export default App
