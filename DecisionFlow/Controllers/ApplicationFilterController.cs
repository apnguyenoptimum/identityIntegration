using DataProvider.ServiceInterfaces;
using DF.Contracts.Response;
//using DF.Users.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DecisionFlow.Controllers
{
    //[Authorize(Policy = AuthorizationPolicies.BearerAuthenticationOrXApiKeyAccess)]
    [Authorize]
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ApplicationFilterController : Controller
    {
        private IApplicationFilter _applicationFilter;
        public ApplicationFilterController(IApplicationFilter applicationFilter)
        {
            _applicationFilter = applicationFilter;
        }
        /// <summary>
        /// Get all action filters from SQL database
        /// </summary>
        /// <param name="locationID"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<ApplicationFilterResponse> GetAllFilters(int locationID)
        {
            var retObj = new ApplicationFilterResponse();

            try
            {
                var filterList = await _applicationFilter.GetAllFilters(locationID);
                var res = await _applicationFilter.GetFilterCollection(filterList);
                retObj.Result = res;
                return retObj;
            }
            catch (System.Exception ex)
            {

                List<ResponseErrors> errors = new List<ResponseErrors>();
                errors.Add(new ResponseErrors
                {
                    Code = "-1",
                    Description = ex.Message,
                    Type = "Error"
                });

                return new ApplicationFilterResponse { IsSuccess = false, Error = errors };
            }

        }
    }
}
