'use strict';

(function (exports) {
    class UrlbarProviderTorOnion {
        get name() {
            return "UrlbarProviderTorOnion";
        }
        get type() {
            UrlbarUtils.PROVIDER_TYPE.SUGGESTION;
        }
        isActive(queryContext) {
            return true;
        }
        isRestricting(queryContext) {
            return false;
        }
        /**
            * Starts querying.
            * @param {UrlbarQueryContext} queryContext The query context object
            * @param {function} addCallback Callback invoked by the provider to add a new
            *        result. A UrlbarResult should be passed to it.
            * @note Extended classes should return a Promise resolved when the provider
            *       is done searching AND returning results.
            * @abstract
            */
        startQuery(queryContext, addCallback) {
            addCallback(
            this,
            new UrlbarResult(
                UrlbarUtils.RESULT_TYPE.URL,
                UrlbarUtils.RESULT_SOURCE.OTHER_LOCAL, // or OTHER_NETWORK?
                { icon: null,
                url: "zzzzzzzzzzzzz",
                title: "",
                tags: [] }
            )
            );
        }
        cancelQuery(queryContext) { }
    }

    Object.assign(exports, {
        UrlbarProviderTorOnion
      });

})(typeof exports !== 'undefined' ? exports : require.scopes.urlbarprovidertoronion = {});
      