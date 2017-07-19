

alexa_file = "alexa.json"


def gather_alexa_json(alexa_file):
	with open (alexa_file, "r") as alexafile:
		alexa_data=alexafile.read().splitlines()
		return alexa_data


#Parses out intent names then puts them into a list
def parse_intent_names():
	lines = gather_alexa_json(alexa_file)
	intent_list = []
	intent_dict = {}
	intent_counter = 0
	# intent_sample_dict = {}
	for i in range (0,len(lines)):
		line = lines[i]
		if "types" in line:
			break
		if "name" in line and "slots" not in lines[i-2]:
			start = line.index(":") + 2
			end = line.index(",") 
			intent = line[start:end]
			intent_dict.update({intent_counter:intent})
			intent_counter += 1
	return intent_dict
			



#Parses out samples then puts them into lists for each intent
def parse_samples():
	lines = gather_alexa_json(alexa_file)
	intent_dict = parse_intent_names()
	sample_dict = {}
	counter = 0 
	for i in range(0, len(lines)):
		line = lines[i]
		if 'samples' in line:
			for t in range(i, len(lines)):
				if "}," in lines[t] or "]," in lines[t]:
					break
				elif 'samples' in lines[t]:
					continue	
				else:
					sample_dict.update({counter:line})
			counter += 1
	print sample_dict 				
		


def build_intent_files(intent_names, sample_text):
	g_intent_start = """
		{
  		  "userSays": [
    		  {
      		    "id": NULL,
      			"data": [
        		  {
          			"text":"""

   	# print (g_intent_start)      

# def build_entity_files(entity_names, entries, synonyms):




# gather_alexa_json(alexa_file)
# build_intent_files("hello","hello")
# parse_intent_names()
parse_samples()
