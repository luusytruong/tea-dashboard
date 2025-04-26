import Setting from "@/component/ui/Setting";
import { fetchGet } from "@/utils/fetch";

const data = await fetchGet("company/info");

const SettingPage = () => {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold">Setting</h1>
      <p className="opacity-60 my-2">Setting infomation for site.</p>
      <Setting data={data} />
    </div>
  );
};

export default SettingPage;
