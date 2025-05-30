using Volo.Abp.Settings;

namespace eLite.Kasherk.Settings;

public class KasherkSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(KasherkSettings.MySetting1));
    }
}
