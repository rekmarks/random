const rawGraph = {
  "KeyringController": [],
  "AddressBookController": [],
  "ApprovalController": [],
  "CurrencyRateController": [
    "NetworkController"
  ],
  "PhishingController": [],
  "AnnouncementController": [],
  "GasFeeController": [
    "NetworkController"
  ],
  "TokenListController": [
    "NetworkController"
  ],
  "TokensController": [
    "PreferencesController",
    "NetworkController"
  ],
  "TokenRatesController": [
    "TokensController",
    "CurrencyRateController",
    "NetworkController"
  ],
  "CollectiblesController": [
    "CurrencyRateController",
    "NetworkController",
    "AssetsContractController"
  ],
  "AssetsContractController": [
    "PreferencesController",
    "NetworkController"
  ],
  "CollectibleDetectionController": [
    "CollectiblesController",
    "PreferencesController",
    "NetworkController",
    "AssetsContractController"
  ],
  "PermissionController": [
    "KeyringController",
    "ApprovalController"
  ],
  "SubjectMetadataController": [],
  "RateLimitController": [],
  "NotificationController": [],
  "SmartTransactionsController": [
    "NetworkController",
    "MetaMetricsController",
    "TransactionController"
  ],
  "EnsController": [
    "NetworkController"
  ],
  "NetworkController": [],
  "PreferencesController": [
    "NetworkController"
  ],
  "AppStateController": [
    "PreferencesController"
  ],
  "CachedBalancesController": [
    "NetworkController"
  ],
  "AlertController": [
    "PreferencesController"
  ],
  "OnboardingController": [],
  "ThreeBoxController": [
    "PreferencesController",
    "AddressBookController",
    "KeyringController",
    "MetaMetricsController"
  ],
  "IncomingTransactionsController": [
    "PreferencesController",
    "NetworkController"
  ],
  "TransactionController": [
    "PreferencesController",
    "NetworkController",
    "KeyringController",
    "MetaMetricsController",
    "AssetsContractController"
  ],
  "DetectTokensController": [
    "PreferencesController",
    "NetworkController",
    "TokensController",
    "AssetsContractController",
    "KeyringController",
    "MetaMetricsController",
    "TokenListController"
  ],
  "SwapsController": [
    "NetworkController",
    "TokenRatesController",
    "TransactionController",
    "GasFeeController"
  ],
  "MetaMetricsController": [
    "PreferencesController",
    "NetworkController"
  ],
  "PermissionLogController": []
}