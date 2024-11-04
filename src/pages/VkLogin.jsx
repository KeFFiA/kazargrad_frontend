import * as VKID from '@vkid/sdk';

function VkLogin() {
  const VkInit = async () => {
    const responsePkce = await fetch('http://localhost:8000/pkce');
    const dataPkce = await responsePkce.json();
    const {verifier, challenge, state, app, scope} = dataPkce;
    VKID.Config.init({
      app: app,
      codeChallenge: challenge,
      redirectUrl: 'https://hwmt7z-85-192-48-219.ru.tuna.am/webhook/vk/callback',
      state: state,
      scope: scope,
      responseMode: VKID.ConfigResponseMode.Redirect,
    });

    const oneTap = new VKID.OneTap();

    oneTap.render({
      container: document.getElementById('VkIdSdkOneTap'),
      showAlternativeLogin: true,
      display: "popup"
    })
        .on(VKID.WidgetEvents.ERROR, vkidOnError)
        .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload) {
          const code = payload.code;
          const deviceId = payload.device_id;

        VKID.Auth.exchangeCode(code, deviceId)
          .then(vkidOnSuccess)
          .catch(vkidOnError);
      });

      function vkidOnSuccess(data) {
        // Обработка полученного результата
      }

      function vkidOnError(error) {
        // Обработка ошибки
      }
    }
    window.onload = async () => {
      await VkInit();
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-center text-3xl font-bold mb-4">KAZARGRAD</h1>
            <p className="text-center text-gray-600 mb-6">Для входа используйте свою учетную запись ВКонтакте.</p>
            <div id="VkIdSdkOneTap"></div>
          </div>
        </div>
    )
  }


export default VkLogin

