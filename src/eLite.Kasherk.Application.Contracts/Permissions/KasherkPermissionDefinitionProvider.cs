using eLite.Kasherk.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace eLite.Kasherk.Permissions;

public class KasherkPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(KasherkPermissions.GroupName);

        //Define your own permissions here. Example:
        //myGroup.AddPermission(KasherkPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<KasherkResource>(name);
    }
}
