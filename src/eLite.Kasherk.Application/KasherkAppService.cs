using eLite.Kasherk.Localization;
using Volo.Abp.Application.Services;

namespace eLite.Kasherk;

/* Inherit your application services from this class.
 */
public abstract class KasherkAppService : ApplicationService
{
    protected KasherkAppService()
    {
        LocalizationResource = typeof(KasherkResource);
    }
}
