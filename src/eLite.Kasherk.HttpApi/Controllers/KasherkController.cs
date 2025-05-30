using eLite.Kasherk.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace eLite.Kasherk.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class KasherkController : AbpControllerBase
{
    protected KasherkController()
    {
        LocalizationResource = typeof(KasherkResource);
    }
}
