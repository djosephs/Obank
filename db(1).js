var db = {
	// faqOBankFeeFeeWavier: {
	// 	"question": ["Will people with fee waiver on their accounts continue to receive a fee waiver once converted to Optum Bank?"],
	// 	"response_name": "faqOBankFeeFeeWavier",
	// 	"slot_vals": null,
	// 	"long_responses": ["Yes, fee waivers will remain unchanged with the migration."],
	// 	"short_responses": ["Yes, fee waivers will be unchanged."],
	// 	"reprompts": ["What else would you like to know about?"]
	// },
	// faqOBankFeeLiquidationHSA: {
	// 	"question": ["Will there be liquidation fees associated with the migration?"],
	// 	"response_name": "faqOBankFeeLiquidationHSA",
	// 	"slot_vals": null,
	// 	"long_responses": ["Investments will be transferred in-kind, meaning account holders will not need to liquidate their investment accounts. While there will be no fee for the migration to Optum Bank, current fees will apply if an account holder chooses to liquidate their investment account. Following migration, Optum Bank will provide additional fee schedule information to account holders."],
	// 	"short_responses": ["There is no need for account holders to liquidate, but if you choose to do so, current fees will apply."],
	// 	"reprompts": ["What else would you like to know about?"]
	// },
	// faqOBankFeeMigrationFeeChange: {
	// 	"question": ["Will there be a change in monthly fees with the migration to Optum Bank?"],
	// 	"response_name": "faqOBankFeeMigrationFeeChange",
	// 	"slot_vals": null,
	// 	"long_responses": ["No, there will not be a change to the monthly fees with the migration."],
	// 	"short_responses": ["No, there will not be a change."],
	// 	"reprompts": ["What else would you like to know about?"]
	// },
	// faqOBankGenAltBilling: {
	// 	"question": ["Is there an alternate billing account for the monthly service fee?"],
	// 	"response_name": "faqOBankGenAltBilling",
	// 	"slot_vals": null,
	// 	"long_responses": ["No, the monthly service fee is automatically deducted from the account holder’s HSA. If account holders currently have an alternate billing account set up at Wells Fargo this information will not be migrated."],
	// 	"short_responses": ["No, it is automatically deducted from your HSA."],
	// 	"reprompts": ["What else would you like to know about?"]
	// },
	// faqOBankGenAPYchange: {
	// 	"question": ["Will the APY change?"],
	// 	"response_name": "faqOBankGenAPYchange",
	// 	"slot_vals": null,
	// 	"long_responses": ["No, there will be no change in the annual percentage yield."],
	// 	"short_responses": ["No, there will be no change."],
	// 	"reprompts": ["What else would you like to know about?"]
	// },
	faqOBankGenCheckbook: {
		"question": ["You guys got checks?", "Do I need to get new checks?"],
		"response_name": "faqOBankGenCheckbook",
		"slot_vals": null,
		"long_responses": ["Yes, Optum Bank offers checks and there is no fee for ordering and using checks for HSA distribution. However, Optum Bank will not auto-issue replacement checks for migrated accounts. After the migration, account holders will need to order checks online, if desired."],
		"short_responses": ["Yes, checks are offered, and there is no fee for ordering and using checks for HSA distribution. Migrated accounts will need to order new checks online."],
		"reprompts": ["What else would you like to know about?"]
	},
	// faqOBankGenCombineWellsOptum: {
	// 	"question": ["How will my Wells Fargo HSA combine with my Optum Bank HSA?"],
	// 	"response_name": "faqOBankGenCombineWellsOptum",
	// 	"slot_vals": null,
	// 	"long_responses": ["During the migration process, Wells Fargo and Optum Bank HSAs will be consolidated into one Optum Bank HSA, retaining the Optum Bank HSA history and adding the Wells Fargo HSA balance. Investments made in Wells Fargo mutual fund options will be maintained."],
	// 	"short_responses": ["Your Wells Fargo HSA and Optum HSA will be consolidated into one Optum Bank HSA, which retain Optum Bank HSA history and Wells Fargo HSA balance. Investments in the Wells Fargo mutual fund options will be maintained."],
	// 	"reprompts": ["What else would you like to know about?"]
	// },
	faqOBankGenContributeHSA: {
		"question": ["How do I contribute more to my HSA?"],
		"response_name": "faqOBankGenContributeHSA",
		"slot_vals": null,
		"long_responses": ["There are many ways to contribute to your HSA. The commonly used methods are contributions made via payroll deductions by your employer, or by logging on to Optumbank.com and making a contribution from your personal checking/savings accounts."],
		"short_responses": ["You can contribute to your HSA either through contributions made via payroll deductions by your employer, or by logging on to Optumbank.com and making a contribution from your personal checking/savings accounts."],
		"reprompts": ["What else would you like to know about?"]
	},
	faqOBankGenCustomerServiceHours: {
		"question": ["When will customer service be available?"],
		"response_name": "faqOBankGenCustomerServiceHours",
		"slot_vals": null,
		"long_responses": ["Customer service is available 24 hours a day, 7 days a week."],
		"short_responses": ["We are available 24/7."],
		"reprompts": ["What else would you like to know about?"]
	},
	faqOBankGenDebit: {
		"question": ["Can I use my debit card at the ATM?", "Will there be debit ATM fees?"],
		"response_name": "faqOBankGenDebit",
		"slot_vals": null,
		"long_responses": ["The Optum Bank debit card can be used at ATMs. Applicable fees apply. Please note, account holders can transfer funds from their Optum Bank HSA to a personal bank account via direct deposit at no charge."],
		"short_responses": ["The Optum Bank debit card can be used at ATMs. Applicable fees apply."],
		"reprompts": ["What else would you like to know about?"]
	},
	// faqOBankGenDependentCard: {
	// 	"question": ["Can my dependents get cards?"],
	// 	"response_name": "faqOBankGenDependentCard",
	// 	"slot_vals": null,
	// 	"long_responses": ["Yes, Optum Bank provides account holders the same number of debit cards that Wells Fargo provided, including dependent cards. Additional debit cards can be ordered from Optumbank.com."],
	// 	"short_responses": ["Yes, additional debit cards, including cards for dependents, can by ordered from Optum Bank Online."],
	// 	"reprompts": ["What else would you like to know about?"]
	// },
	faqOBankGenHSAFeatures: {
		"question": ["What features are in my Optum HSA?"],
		"response_name": "faqOBankGenHSAFeatures",
		"slot_vals": null,
		"long_responses": ["A few of the enhancements account holders will have include: • Receipt image upload and expense tracker • Quicken® export functionality • The ability to transfer funds from your HSA to an account at any bank • An option to email customer service, in addition to 24/7 online and telephone access • An interactive Health Savings Checkup calculator to help account holders determine if they’re saving enough for health care in retirement."],
		"short_responses": ["Optum Bank HSA includes new enhancements, including receipt image upload and expense tracker, Quicken support."],
		"reprompts": ["What else would you like to know about?"]
	},
	faqOBankGenHSATransfer: {
		"question": ["Can I transfer Optum Bank HSA money to my personal bank account?"],
		"response_name": "faqOBankGenHSATransfer",
		"slot_vals": null,
		"long_responses": ["Yes, Optum Bank offers a direct deposit option via ACH for disbursement or reimbursement back to an account holder when account holders provide their bank account number and routing number."],
		"short_responses": ["Yes, you can transfer funds via direct deposit directly into your account."],
		"reprompts": ["What else would you like to know about?"]
	},
	// faqOBankGenMigrationBeneficiary: {
	// 	"question": ["Will beneficiary elections be migrated?"],
	// 	"response_name": "faqOBankGenMigrationBeneficiary",
	// 	"slot_vals": null,
	// 	"long_responses": ["No, beneficiary elections will not be migrated to Optum Bank. New beneficiary elections will need to be made after HSA migration."],
	// 	"short_responses": ["No, beneficiary elections will not be migrated."],
	// 	"reprompts": ["What else would you like to know about?"]
	// },
 // 	faqOBankGenMigrationHistory: {
	// 	"question": ["Will account history be migrated?"],
	// 	"response_name": "faqOBankGenMigrationHistory",
	// 	"slot_vals": null,
	// 	"long_responses": ["Account history will not be included in the migration to Optum Bank. Historical transaction reporting, access to statements and tax documentation on Wells Fargo Online® will be available for 240 days after the migration."],
	// 	"short_responses": ["Account history will not be migrated, and will be avaiable for download on Wells Fargo Online for 240 days after the migration."],
	// 	"reprompts": ["What else would you like to know about?"]
	// }, 
	// faqOBankGenNotifyProvider: {
	// 	"question": ["Will you inform my medical providers?"],
	// 	"response_name": "faqOBankGenNotifyProvider",
	// 	"slot_vals": null,
	// 	"long_responses": ["Account holders will need to contact their providers/vendors and provide their new account number and transit number to continue having qualified medical expenses automatically pulled from the account. If a current debit card is on file with providers/vendors, account holders will need to provide their new Optum Bank card number."],
	// 	"short_responses": ["No. You should update your debit card information used by any medical provider/vendor with your Optum Bank card number."],
	// 	"reprompts": ["What else would you like to know about?"]
	// },
	faqOBankGenQuicken: {
		"question": ["Can I use Quicken with Optum Bank?"],
		"response_name": "faqOBankGenQuicken",
		"slot_vals": null,
		"long_responses": ["Yes, account holders will be able to download transactions into Quicken from their Optum Bank HSA."],
		"short_responses": ["Yes."],
		"reprompts": ["What else would you like to know about?"]
	},
	faqOBankGenReachMaximum: {
		"question": ["How will Optum Bank handle accounts that reach the annual maximum?"],
		"response_name": "faqOBankGenReachMaximum",
		"slot_vals": null,
		"long_responses": ["Optum Bank monitors accounts at various levels including individual, individual plus catchup, family, and family plus catchup based on coverage type and age. Communication is sent to account holders when accounts are close to reaching the annual maximum."],
		"short_responses": ["Communications will be sent to account holders when accounts are close to the maximum."],
		"reprompts": ["What else would you like to know about?"]
	},
	
	faqOBankGenWhoOptum: {
		"question": ["Who is Optum/Optum Bank?"],
		"response_name": "faqOBankGenWhoOptum",
		"slot_vals": null,
		"long_responses": ["Optum Bank, Member FDIC, is dedicated to providing products and services that help make the health care system work better for everyone."],
		"short_responses": ["Optum Bank provides products and services that help make the health care system work better for everyone."],
		"reprompts": ["What else would you like to know about?"]
	},
	/*faqOBankInvConvertInvestments: {
		"question": ["Will account holders be required to convert investments into cash before the migration? Will the value from an existing Wells Fargo investment transfer to a different Optum Bank investment?"],
		"response_name": "faqOBankInvConvertInvestments",
		"slot_vals": null,
		"long_responses": ["There will be no need for account holders to liquidate or change their investment accounts. Investments will transfer to Optum Bank based on the funds selected. In upcoming communications, Optum Bank will share more information about its overall investment offerings. "],
		"short_responses": ["There will be no need to liquidate or change investment accounts, and investments will transfer."],
		"reprompts": ["What else would you like to know about?"]
	}*/
	faqOBankInvInvestmentSweep: {
		"question": ["Is the Optum Bank investment sweep a one-way sweep from the cash account to the investment?"],
		"response_name": "faqOBankInvInvestmentSweep",
		"slot_vals": null,
		"long_responses": ["Yes, there is a one-way sweep from the Optum Bank HSA to the investment account."],
		"short_responses": ["Yes."],
		"reprompts": ["What else would you like to know about?"]
	},
	faqOBankInvShowBalance: {
		"question": ["Does the investment balance show online with a breakdown of the dollars in each fund?"],
		"response_name": "faqOBankInvShowBalance",
		"slot_vals": null,
		"long_responses": ["Yes, the Optum Bank website shows both aggregate balance and the balance by fund."],
		"short_responses": ["Yes."],
		"reprompts": ["What else would you like to know about?"]
	},
	faqOBankInvSweepActivate: {
		"question": ["How is the Optum Bank investment sweep activated and deactivated?"],
		"response_name": "faqOBankInvSweepActivate",
		"slot_vals": null,
		"long_responses": ["Activating/deactivating the investment sweep is available online or by calling the call center, but the account must be registered prior to the call."],
		"short_responses": ["You can activate or deactive it online, or by calling the call center."],
		"reprompts": ["What else would you like to know about?"]
	},
	/*faqOBankInvThreshold: {
		"question": ["What will the investment threshold be going forward?"],
		"response_name": "faqOBankInvThreshold",
		"slot_vals": null,
		"long_responses": ["Wells Fargo investment thresholds will be maintained when accounts move to Optum Bank. There will be no change to the investment thresholds, whatever threshold the account holder had selected with Wells Fargo will be maintained by Optum Bank."],
		"short_responses": ["Thresholds will be remaind the same."],
		"reprompts": ["What else would you like to know about?"]
	}*/
	/*faqOBankOnlMigrationBillPayments: {
		"question": ["Will my recurring payments or bill payments on Wells Fargo Online be migrated over to Optum Bank?"],
		"response_name": "faqOBankOnlMigrationBillPayments",
		"slot_vals": null,
		"long_responses": ["Payment information will not be migrated. Account holders will need to reestablish any recurring payments and bill payments on Optum Bank after the migration."],
		"short_responses": ["No."],
		"reprompts": ["What else would you like to know about?"]
	},*/
	/*faqOBankOnlMigrationOnlineAccess: {
		"question": ["How does the migration affect account holders’ online access to HSAs?"],
		"response_name": "faqOBankOnlMigrationOnlineAccess",
		"slot_vals": null,
		"long_responses": ["Once migration has occurred, account holders will be notified that they no longer have access to their HSAs through Wells Fargo Online®. They will receive instructions and links to access their HSAs through Optum Bank and/or myuhc.com if they have UnitedHealthcare health insurance."],
		"short_responses": ["Access will only be through Optum Bank HSAs."],
		"reprompts": ["What else would you like to know about?"]
	}*/
	faqOBankOnlMobileWallet: {
		"question": ["Can the Optum Bank HSA be used with mobile wallets such as Apple Pay, Android Pay, Samsung Pay, and Google Wallet?"],
		"response_name": "faqOBankOnlMobileWallet",
		"slot_vals": null,
		"long_responses": ["Optum Bank does not currently offer connectivity with mobile wallets, but will offer this capability in a future enhancement. If you currently have a tokenized card this functionality will not be migrated."],
		"short_responses": ["Not currently, but this feature will be available soon."],
		"reprompts": ["What else would you like to know about?"]
	},
	faqOBankTaxBalanceFund: {
		"question": ["Does the Optum Bank HSA statement include the investment balance and balance per fund?"],
		"response_name": "faqOBankTaxBalanceFund",
		"slot_vals": null,
		"long_responses": ["Yes, statements include aggregate balance and balance per fund."],
		"short_responses": ["Yes."],
		"reprompts": ["What else would you like to know about?"]
	},
	faqOBankTaxMigrationImplications: {
		"question": ["Are there any tax implications associated with the HSA migration to Optum Bank?"],
		"response_name": "faqOBankTaxMigrationImplications",
		"slot_vals": null,
		"long_responses": ["No, migration to Optum Bank will be done as a trustee-to-trustee transfer with accounts transferring in-kind, so there will be no tax implications as a result of the migration."],
		"short_responses": ["There are no tax implications associated with the transfer."],
		"reprompts": ["What else would you like to know about?"]
	},

	faqOBankTaxStatementFrequency: {
		"question": ["How frequently will Optum Bank statements be generated?"],
		"response_name": "faqOBankTaxStatementFrequency",
		"slot_vals": null,
		"long_responses": ["Optum Bank statements are issued on a monthly basis."],
		"short_responses": ["Monthly."],
		"reprompts": ["What else would you like to know about?"]
	},
	faqOBankTaxStatementGeneration: {
		"question": ["How are Optum Bank statements generated: paper, online, or both? How long are they stored online to be available for download?"],
		"response_name": "faqOBankTaxStatementGeneration",
		"slot_vals": null,
		"long_responses": ["Paper and online statements are both available. Statements remain online for 36 months, whereas paper statements can be requested at any time."],
		"short_responses": ["Statements are available online for 36 months and paper statements are available upon request."],
		"reprompts": ["What else would you like to know about?"]
	},
	/*faqOBankTaxTaxReport: {
		"question": ["Will there be two separate tax reports for 2016, or will there just be one from Optum Bank?"],
		"response_name": "faqOBankTaxTaxReport",
		"slot_vals": null,
		"long_responses": ["For 2016, account holders will receive two sets of tax documents—one from Wells Fargo and one from Optum Bank. In 2017 and beyond, they’ll receive only one set of tax documents from Optum Bank. "],
		"short_responses": ["There will be two seperate tax documents for 2016."],
		"reprompts": ["What else would you like to know about?"]
	}*/
	/*faqOBankUHC: {
		"question": ["Will account holders maintain their Wells Fargo usernames/logins and passwords?"],
		"response_name": "faqOBankUHC",
		"slot_vals": null,
		"long_responses": ["No, after migration, once account holders receive information and instructions to access their HSAs through Optum Bank and/or myuhc.com, they will need to establish a new Optum Bank username/login and password. In the future, Optum Bank will communicate about how to establish website credentials. Until then, account holders are able to access their HSAs on Wells Fargo Online®"],
		"short_responses": ["No, users must open a new account."],
		"reprompts": ["What else would you like to know about?"]
	}*/
	/*faqOBankUHCOnlineAccess: {
		"question": ["How does the migration affect account holders’ online access to HSAs?"],
		"response_name": "faqOBankUHCOnlineAccess",
		"slot_vals": null,
		"long_responses": ["Once migration has occurred, account holders will be notified that they no longer have access to their HSAs through Wells Fargo Online®. They will receive instructions and links to access their HSAs through Optum Bank and/or myuhc.com if they have UnitedHealthcare health insurance. "],
		"short_responses": ["Access will be only through Optum Bank HSA."],
		"reprompts": ["What else would you like to know about?"]
	}*/
	/*faqOBankUHCUHCImpact: {
		"question": ["What impact does the move to Optum Bank have with account holders who also have UHC medical plan(s)?"],
		"response_name": "faqOBankUHCUHCImpact",
		"slot_vals": null,
		"long_responses": ["Wells Fargo HSA clients and account holders with UnitedHealthcare coverage will have an integrated consumer experience post-migration at myuhc.com and will be able to access their HSA via that website. Additional communications on this topic will follow as our migration strategy for these customers and account holders is determined."],
		"short_responses": ["An integrated consumer experinece post-migration at myuhc.com with HSA access will be provided."],
		"reprompts": ["What else would you like to know about?"]
	}*/

}

module.exports = db;