using DataProvider.ServiceInterfaces;
using DF.Contracts.Response;
//using DF.Users.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using DF.Contracts.Request;
using DF.Contracts.Models;


namespace DecisionFlow.Controllers
{
    //[Authorize(Policy = AuthorizationPolicies.BearerAuthenticationOrXApiKeyAccess)]
    [Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DeliverableViewController : Controller
    {
        IDeliverableView _deliverableView;
        IInventoryView _inventoryView;
        IPerformanceView _performanceView;
        public DeliverableViewController(IDeliverableView deliverableView, IInventoryView inventoryView, IPerformanceView performanceView)
        {
            _deliverableView = deliverableView;
            _inventoryView = inventoryView;
            _performanceView = performanceView;
        }
        /// <summary>
        /// Get grid data
        /// </summary>
        /// <param name="deliverableGridFilter"></param>
        /// <returns></returns>

        //[HttpGet]
        //public async Task<DeliverableViewResponse> GetAllGridData()
        //{
        //    try
        //    {
        //        var retObj = new DeliverableViewResponse();
        //        retObj.Result = await _deliverableView.GetDeliverables(null);
        //        return retObj;
        //    }
        //    catch (System.Exception ex)
        //    {

        //        List<ResponseErrors> errors = new List<ResponseErrors>();
        //        errors.Add(new ResponseErrors
        //        {
        //            Code = "-1",
        //            Description = ex.Message,
        //            Type = "Error"
        //        });

        //        return new DeliverableViewResponse { IsSuccess = false, Error = errors };
        //    }
        //}

        [HttpPost] 
        public async Task<DeliverableViewResponse> GetAllGridDataByFilter(DeliverableGridFilter filter) //Delete this once ANDY switch
        {
            try
            {
                var retObj = new DeliverableViewResponse();
                retObj.Result = await _deliverableView.GetDeliverables(filter);
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

                return new DeliverableViewResponse { IsSuccess = false, Error = errors };
            }
        }
        [HttpPost]
        public async Task<DeliverableViewResponse> GetDeliverableViewDataByFilter(DeliverableGridFilter filter)
        {
            try
            {
                var retObj = new DeliverableViewResponse();
                retObj.Result = await _deliverableView.GetDeliverables(filter);
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

                return new DeliverableViewResponse { IsSuccess = false, Error = errors };
            }
        }

        [HttpPost]
        public async Task<InventoryViewResponse> GetInventoryViewDataByFilter(DeliverableGridFilter filter)
        {
            try
            {
                var retObj = new InventoryViewResponse();
                var allData = await _inventoryView.GetDeliverableInventoryData(filter);

                retObj.Result = _inventoryView.GetGridData(allData);
                retObj.Summary = _inventoryView.GetHeaderData(allData);
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

                return new InventoryViewResponse { IsSuccess = false, Error = errors };
            }
        }
        [HttpPost]
        public async Task<PerformanceViewResponse> GetPerformanceViewDataByFilter(DeliverableGridFilter filter)
        {
            try
            {
                var retObj = new PerformanceViewResponse();
                IEnumerable<PerformanceView> allData = await _performanceView.GetDeliverablePerformanceData(filter);

                retObj.Result = allData;// _performanceView.GetGridData(allData);
                //retObj.Summary = _performanceView.GetHeaderData(allData);
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

                return new PerformanceViewResponse { IsSuccess = false, Error = errors };
            }
        }
    }
}
