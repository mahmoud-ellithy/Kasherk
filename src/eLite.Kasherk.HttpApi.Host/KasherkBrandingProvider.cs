using Microsoft.Extensions.Localization;
using eLite.Kasherk.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace eLite.Kasherk;

[Dependency(ReplaceServices = true)]
public class KasherkBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<KasherkResource> _localizer;

    public KasherkBrandingProvider(IStringLocalizer<KasherkResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
